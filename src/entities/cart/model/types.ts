import type { Product } from "@/entities/product";

export interface CartItem {
    productId: string
    quantity: number
    product: Product
}

export interface Cart {
    items: CartItem[]
    totalItems: number
    totalPrice: number
}

export interface CartState {
    cart: Cart
    isLoading: false
    error: string | null
}

