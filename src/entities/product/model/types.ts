export interface Product {
  id: string
  title: string
  description: string
  price: number
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
}
  
  export interface ProductsFilter {
    page?: number
    limit?: number
    category?: string
    priceMin?: number
    priceMax?: number
    search?: string
    sort?: "default" | "price-asc" | "price-desc" | "rating"
  }
  
export interface ProductsState {
    items: Product[]
    isLoading: boolean
    error: string | null
    totalItems: number
    totalPages: number
    currentPage: number
  }
  