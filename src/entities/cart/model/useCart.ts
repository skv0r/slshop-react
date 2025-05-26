import { useState, useEffect, useCallback } from "react"
import type { CartItem, Cart } from "./types"
import type { Product } from "@/entities/product"

const CART_STORAGE_KEY = "sl-shop-cart"

const useCart = () => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
      }
    } catch (err) {
      console.error("Error loading cart from localStorage:", err)
      setError("Ошибка загрузки корзины")
    }
  }, [])

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    } catch (err) {
      console.error("Error saving cart to localStorage:", err)
      setError("Ошибка сохранения корзины")
    }
  }, [cart])

  // Calculate totals
  const calculateTotals = useCallback((items: CartItem[]) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    return { totalItems, totalPrice }
  }, [])

  // Add item to cart
  const addToCart = useCallback(
    (product: Product, quantity = 1) => {
      setIsLoading(true)
      setError(null)

      try {
        setCart((prevCart) => {
          const existingItemIndex = prevCart.items.findIndex((item) => item.productId === product.id)

          let newItems: CartItem[]

          if (existingItemIndex >= 0) {
            // Update existing item
            newItems = prevCart.items.map((item, index) =>
              index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item,
            )
          } else {
            // Add new item
            const newItem: CartItem = {
              productId: product.id,
              quantity,
              product,
            }
            newItems = [...prevCart.items, newItem]
          }

          const { totalItems, totalPrice } = calculateTotals(newItems)

          return {
            items: newItems,
            totalItems,
            totalPrice,
          }
        })
      } catch (err) {
        setError("Ошибка добавления товара в корзину")
        console.error("Error adding to cart:", err)
      } finally {
        setIsLoading(false)
      }
    },
    [calculateTotals],
  )

  // Update item quantity
  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId)
        return
      }

      setCart((prevCart) => {
        const newItems = prevCart.items.map((item) => (item.productId === productId ? { ...item, quantity } : item))

        const { totalItems, totalPrice } = calculateTotals(newItems)

        return {
          items: newItems,
          totalItems,
          totalPrice,
        }
      })
    },
    [calculateTotals],
  )

  // Remove item from cart
  const removeFromCart = useCallback(
    (productId: string) => {
      setCart((prevCart) => {
        const newItems = prevCart.items.filter((item) => item.productId !== productId)
        const { totalItems, totalPrice } = calculateTotals(newItems)

        return {
          items: newItems,
          totalItems,
          totalPrice,
        }
      })
    },
    [calculateTotals],
  )

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0,
    })
  }, [])

  // Get item quantity by product ID
  const getItemQuantity = useCallback(
    (productId: string) => {
      const item = cart.items.find((item) => item.productId === productId)
      return item?.quantity || 0
    },
    [cart.items],
  )

  // Check if item is in cart
  const isInCart = useCallback(
    (productId: string) => {
      return cart.items.some((item) => item.productId === productId)
    },
    [cart.items],
  )

  return {
    cart,
    isLoading,
    error,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getItemQuantity,
    isInCart,
  }
}

export default useCart
