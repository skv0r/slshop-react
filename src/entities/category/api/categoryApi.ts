import { getCategories } from "@/entities/product/api/productApi";
import Category from "../model/types";


const fetchCategories = async () : Promise<Category[]> => {

    //для генерации вида работы
    await new Promise((resolve) => setTimeout(resolve, 300))

    const categoryNames = getCategories() //нужно получить из продуктс

  // Transform into Category objects
  const categories: Category[] = [
    { id: "all", name: "Все категории", count: 0 },
    ...categoryNames.map((name) => ({
      id: name,
      name: getCategoryDisplayName(name),
      count: 0, // We'll update this later
    })),
  ]

  return categories
}

// Helper function to get display names for categories
function getCategoryDisplayName(categoryId: string): string {
  const displayNames: Record<string, string> = {
    electronics: "Электроника",
    beauty: "Красота и здоровье",
    home: "Товары для дома",
  }

  return displayNames[categoryId] || categoryId
}


export default fetchCategories;