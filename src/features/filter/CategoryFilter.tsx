import { Label, Checkbox } from "@/shared/ui/components"
import type Category from "@/entities/category/model/types"

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onChange: (categoryId: string) => void
  isLoading?: boolean
}

export const CategoryFilter = ({ categories, selectedCategory, onChange, isLoading = false }: CategoryFilterProps) => {
  if (isLoading) {
    return <div className="animate-pulse h-40 bg-gray-100 rounded-md"></div>
  }

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-3">Категории</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Label className="flex cursor-pointer items-center gap-2 font-normal">
              <Checkbox
                checked={selectedCategory === category.id}
                onCheckedChange={() => onChange(category.id)}
                className="bg-[#f1f1f1]"
              />
              <span>
                {category.name} {category.count > 0 && `(${category.count})`}
              </span>
            </Label>
          </li>
        ))}
      </ul>
    </div>
  )
}
