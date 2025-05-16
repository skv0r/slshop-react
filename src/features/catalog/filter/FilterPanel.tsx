import { Button } from "@/shared/ui/components"
import { X } from "lucide-react"
import { PriceRangeFilter } from "./PriceRangeFilter"
import { CategoryFilter } from "./CategoryFilter"
import { SortFilter } from "./SortFilter"
import { SearchFilter } from "./SearchFilter"
import type Category from "@/entities/category/model/types"
import type { ProductsFilter } from "@/entities/product"

interface FilterPanelProps {
  categories: Category[]
  filter: ProductsFilter
  onPriceChange: (values: [number, number]) => void
  onCategoryChange: (category: string) => void
  onSortChange: (sort: ProductsFilter["sort"]) => void
  onSearchChange: (search: string) => void
  onReset: () => void
  isLoading?: boolean
}

export const FilterPanel = ({
  categories,
  filter,
  onPriceChange,
  onCategoryChange,
  onSortChange,
  onSearchChange,
  onReset,
  isLoading = false,
}: FilterPanelProps) => {
  return (
    <div className="w-[370px] bg-white border border-[#CBD5E1] rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[24px] font-bold">Фильтры</h3>
        <Button variant="ghost" onClick={onReset} size="sm" className="h-8 px-2">
          <X className="h-4 w-4" />
          <span className="ml-1">Очистить</span>
        </Button>
      </div>

      <div className="flex flex-col w-full gap-4">
        <SearchFilter value={filter.search || ""} onChange={onSearchChange} />

        <PriceRangeFilter
          minPrice={0}
          maxPrice={500000}
          currentMin={filter.priceMin || 0}
          currentMax={filter.priceMax || 500000}
          onChange={onPriceChange}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={filter.category || "all"}
          onChange={onCategoryChange}
          isLoading={isLoading}
        />

        <SortFilter value={filter.sort} onChange={onSortChange} />
      </div>
    </div>
  )
}
