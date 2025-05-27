import { supabase } from "@/shared/lib/supabase"
import type { ProductsFilter, Product } from "../model/types"

// Получение всех доступных категорий из продуктов
export const getCategories = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase.from("categories").select("name")

    if (error) {
      throw new Error(`Ошибка загрузки категорий: ${error.message}`)
    }

    return (data || []).map((category) => category.name)
  } catch (error) {
    console.error("Ошибка при загрузке категорий:", error)
    return []
  }
}

// Получение товаров с фильтрацией и пагинацией
export const getProducts = async (
  filter: ProductsFilter = {},
): Promise<{
  items: Product[]
  totalItems: number
  totalPages: number
}> => {
  try {
    // Базовый запрос
    let query = supabase
      .from("products")
      .select(
        `
        *,
        categories!inner(name, display_name)
      `,
        { count: "exact" },
      )
      .eq("in_stock", true)

    // Применяем фильтр по категории
    if (filter.category && filter.category !== "all") {
      query = query.eq("categories.name", filter.category)
    }

    // Применяем фильтр по цене
    if (filter.priceMin !== undefined) {
      query = query.gte("price", filter.priceMin)
    }

    if (filter.priceMax !== undefined) {
      query = query.lte("price", filter.priceMax)
    }

    // Применяем поиск
    if (filter.search) {
      query = query.or(`title.ilike.%${filter.search}%,description.ilike.%${filter.search}%`)
    }

    // Применяем сортировку
    if (filter.sort) {
      switch (filter.sort) {
        case "price-asc":
          query = query.order("price", { ascending: true })
          break
        case "price-desc":
          query = query.order("price", { ascending: false })
          break
        case "rating":
          query = query.order("rating_rate", { ascending: false })
          break
        default:
          query = query.order("created_at", { ascending: false })
          break
      }
    } else {
      query = query.order("created_at", { ascending: false })
    }

    // Применяем пагинацию
    const page = filter.page || 1
    const limit = filter.limit || 6
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit - 1

    query = query.range(startIndex, endIndex)

    const { data, error, count } = await query

    if (error) {
      throw new Error(`Ошибка загрузки товаров: ${error.message}`)
    }

    // Преобразуем данные из Supabase в формат Product
// Определяем интерфейс для данных продукта
interface ProductData {
  id: string;
  title: string;
  description?: string;
  price: number;
  categories?: {
    name: string;
  };
  image_url?: string;
  rating_rate?: number;
  rating_count?: number;
}

// Преобразуем данные из Supabase в формат Product
const products: Product[] = (data || []).map((item: ProductData) => ({
  id: item.id,
  title: item.title,
  description: item.description || "",
  price: Number(item.price),
  category: item.categories?.name || "unknown",
  image: item.image_url || "/placeholder.svg",
  rating: item.rating_rate
    ? {
        rate: Number(item.rating_rate),
        count: item.rating_count || 0,
      }
    : undefined,
}))

    const totalItems = count || 0
    const totalPages = Math.ceil(totalItems / limit)

    return {
      items: products,
      totalItems,
      totalPages,
    }
  } catch (error) {
    console.error("Ошибка при загрузке товаров:", error)
    throw error
  }
}

// Получение одного товара по ID
export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(`
        *,
        categories(name, display_name)
      `)
      .eq("id", id)
      .eq("in_stock", true)
      .single()

    if (error) {
      if (error.code === "PGRST116") {
        return null // Товар не найден
      }
      throw new Error(`Ошибка загрузки товара: ${error.message}`)
    }

    if (!data) {
      return null
    }

    // Преобразуем данные из Supabase в формат Product
    const product: Product = {
      id: data.id,
      title: data.title,
      description: data.description || "",
      price: Number(data.price),
      category: data.categories?.name || "unknown",
      image: data.image_url || "/placeholder.svg",
      rating: data.rating_rate
        ? {
            rate: Number(data.rating_rate),
            count: data.rating_count || 0,
          }
        : undefined,
    }

    return product
  } catch (error) {
    console.error("Ошибка при загрузке товара:", error)
    throw error
  }
}
