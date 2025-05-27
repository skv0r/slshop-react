import { supabase } from "@/shared/lib/supabase"
import type Category from "../model/types"

const fetchCategories = async (): Promise<Category[]> => {
  try {
    const { data, error } = await supabase.from("categories").select("*").order("display_name")

    if (error) {
      throw new Error(`Ошибка загрузки категорий: ${error.message}`)
    }

    // Преобразуем данные из Supabase в формат Category
    const categories: Category[] = [
      { id: "all", name: "Все категории", count: 0 },
      ...(data || []).map((category) => ({
        id: category.name,
        name: category.display_name,
        count: 0, // Количество будет обновлено позже при загрузке товаров
      })),
    ]

    return categories
  } catch (error) {
    console.error("Ошибка при загрузке категорий:", error)
    throw error
  }
}

export default fetchCategories
