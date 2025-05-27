import { useState, useEffect, useCallback } from "react"
import type { CartItem, Cart } from "./types"
import type { Product } from "@/entities/product"

const CART_STORAGE_KEY = "sl-shop-cart"

// Глобальное состояние корзины
let globalCart: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

// Список слушателей для обновления компонентов
const listeners: Set<() => void> = new Set()

// Загрузка из localStorage при первом импорте
try {
  const savedCart = localStorage.getItem(CART_STORAGE_KEY)
  if (savedCart) {
    globalCart = JSON.parse(savedCart)
  }
} catch (err) {
  console.error("Error loading cart from localStorage:", err)
}

// Функция для уведомления всех компонентов об изменениях
const notifyListeners = () => {
  listeners.forEach(listener => listener())
}

// Функция для сохранения в localStorage
const saveToStorage = (cart: Cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  } catch (err) {
    console.error("Error saving cart to localStorage:", err)
  }
}

const useCart = () => {
  const [cart, setCart] = useState<Cart>(globalCart)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Подписка на изменения глобального состояния
  useEffect(() => {
    const updateCart = () => setCart(globalCart)
    listeners.add(updateCart)
    return () => {
      listeners.delete(updateCart)
    }
  }, [])

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
        const existingItemIndex = globalCart.items.findIndex((item) => item.productId === product.id)

        let newItems: CartItem[]

        if (existingItemIndex >= 0) {
          // Update existing item
          newItems = globalCart.items.map((item, index) =>
            index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item,
          )
        } else {
          // Add new item
          const newItem: CartItem = {
            productId: product.id,
            quantity,
            product,
          }
          newItems = [...globalCart.items, newItem]
        }

        const { totalItems, totalPrice } = calculateTotals(newItems)

        globalCart = {
          items: newItems,
          totalItems,
          totalPrice,
        }

        saveToStorage(globalCart)
        notifyListeners()
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

      const newItems = globalCart.items.map((item) => (item.productId === productId ? { ...item, quantity } : item))
      const { totalItems, totalPrice } = calculateTotals(newItems)

      globalCart = {
        items: newItems,
        totalItems,
        totalPrice,
      }

      saveToStorage(globalCart)
      notifyListeners()
    },
    [calculateTotals],
  )

  // Remove item from cart
  const removeFromCart = useCallback(
    (productId: string) => {
      const newItems = globalCart.items.filter((item) => item.productId !== productId)
      const { totalItems, totalPrice } = calculateTotals(newItems)

      globalCart = {
        items: newItems,
        totalItems,
        totalPrice,
      }

      saveToStorage(globalCart)
      notifyListeners()
    },
    [calculateTotals],
  )

  // Clear entire cart
  const clearCart = useCallback(() => {
    globalCart = {
      items: [],
      totalItems: 0,
      totalPrice: 0,
    }

    saveToStorage(globalCart)
    notifyListeners()
  }, [])

  // Get item quantity by product ID
  const getItemQuantity = useCallback(
    (productId: string) => {
      const item = globalCart.items.find((item) => item.productId === productId)
      return item?.quantity || 0
    },
    [],
  )

  // Check if item is in cart
  const isInCart = useCallback(
    (productId: string) => {
      return globalCart.items.some((item) => item.productId === productId)
    },
    [],
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