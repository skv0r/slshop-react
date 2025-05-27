"use client"

import type { ProductsFilter } from "@/entities/product"

interface SortOption {
  value: ProductsFilter["sort"]
  label: string
}

interface SortFilterProps {
  value: ProductsFilter["sort"]
  onChange: (value: ProductsFilter["sort"]) => void
}

const sortOptions: SortOption[] = [
  { value: "default", label: "По умолчанию" },
  { value: "price-asc", label: "Цена: по возрастанию" },
  { value: "price-desc", label: "Цена: по убыванию" },
  { value: "rating", label: "По рейтингу" },
]

export const SortFilter = ({ value, onChange }: SortFilterProps) => {
  return (
    <div className="mb-6">
      <label htmlFor="sort" className="text-sm font-medium block mb-2">
        Сортировка
      </label>
      <select
        id="sort"
        value={value || "default"}
        onChange={(e) => onChange(e.target.value as ProductsFilter["sort"])}
        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
