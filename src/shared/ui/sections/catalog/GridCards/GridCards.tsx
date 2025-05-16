"use client"
import { CatalogPagination } from "@/features/catalog/pagination"
import useCategories from "@/entities/category/model/useCategories"
import useProducts from "@/entities/product/model/useProducts"
import ProductGrid from "./ProductGrid"
import { FilterPanel } from "@/features/catalog/filter/FilterPanel"

const GridCards = () => {
  // Get categories
  const { categories, isLoading: categoriesLoading } = useCategories()

  // Initialize products with filters
  const {
    items: products,
    isLoading: productsLoading,
    totalPages,
    currentPage,
    filter,
    setPage,
    setPriceRange,
    setCategory,
    setSort,
    setSearch,
    resetFilters,
  } = useProducts({
    limit: 6,
    page: 1,
  })

  // Handle price range change
  const handlePriceChange = (values: [number, number]) => {
    setPriceRange(values)
  }

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
      setCategory(categoryId)
  }

  // Handle sort change
  const handleSortChange = (sort: "default" | "price-asc" | "price-desc" | "rating" | undefined) => {
    setSort(sort)
  }

  // Handle search change
  const handleSearchChange = (search: string) => {
    setSearch(search)
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <FilterPanel
        categories={categories}
        filter={filter}
        onPriceChange={handlePriceChange}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        onReset={resetFilters}
        isLoading={categoriesLoading}
      />

      <div className="flex flex-col">
        <ProductGrid products={products} isLoading={productsLoading} />
        <CatalogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  )
}


export default GridCards