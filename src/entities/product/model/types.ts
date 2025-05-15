export interface Product {
    imgUrl: string,
    title: string,
    price: number,
  }
  
export interface ProductsFilter {
    page?: number
    limit?: number
    category?: string
    priceMin?: number
    priceMax?: number
    sort?: "default" | "price-asc" | "price-desc" | "rating"
  }
  
export interface ProductsState {
    items: Product[]
    isLoading: boolean
    error: string | null
    totalItems: number
    totalPages: number
  }
  