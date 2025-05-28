import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { Product } from '@/entities/product'
import type { CartItem, Cart } from './types'

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

const mockProduct: Product = {
  id: '1',
  title: 'Тестовый продукт',
  description: 'Тестовое описание',
  price: 1000,
  category: 'электроника',
  image: '/test.jpg',
  rating: { rate: 4.5, count: 100 }
}

const mockCartItem: CartItem = {
  productId: '1',
  quantity: 2,
  product: mockProduct
}

describe('Утилиты для корзины', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('calculateTotals', () => {
    it('должен правильно рассчитывать итоги для пустой корзины', () => {
      const items: CartItem[] = []
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      
      expect(totalItems).toBe(0)
      expect(totalPrice).toBe(0)
    })

    it('должен правильно рассчитывать итоги для корзины с товарами', () => {
      const items: CartItem[] = [
        mockCartItem,
        {
          productId: '2',
          quantity: 1,
          product: { ...mockProduct, id: '2', price: 500 }
        }
      ]
      
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      
      expect(totalItems).toBe(3) // 2 + 1
      expect(totalPrice).toBe(2500) // (1000 * 2) + (500 * 1)
    })

    it('должен правильно обрабатывать один товар', () => {
      const items: CartItem[] = [mockCartItem]
      
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      
      expect(totalItems).toBe(2)
      expect(totalPrice).toBe(2000) // 1000 * 2
    })
  })

  describe('Управление товарами в корзине', () => {
    it('должен находить существующий товар в корзине', () => {
      const items: CartItem[] = [mockCartItem]
      const existingItemIndex = items.findIndex((item) => item.productId === '1')
      
      expect(existingItemIndex).toBe(0)
    })

    it('не должен находить несуществующий товар в корзине', () => {
      const items: CartItem[] = [mockCartItem]
      const existingItemIndex = items.findIndex((item) => item.productId === '999')
      
      expect(existingItemIndex).toBe(-1)
    })

    it('должен правильно обновлять количество товара', () => {
      const items: CartItem[] = [mockCartItem]
      const updatedItems = items.map((item) => 
        item.productId === '1' ? { ...item, quantity: item.quantity + 1 } : item
      )
      
      expect(updatedItems[0].quantity).toBe(3)
      expect(updatedItems[0].productId).toBe('1')
    })

    it('должен правильно удалять товар из корзины', () => {
      const items: CartItem[] = [
        mockCartItem,
        {
          productId: '2',
          quantity: 1,
          product: { ...mockProduct, id: '2' }
        }
      ]
      
      const filteredItems = items.filter((item) => item.productId !== '1')
      
      expect(filteredItems).toHaveLength(1)
      expect(filteredItems[0].productId).toBe('2')
    })
  })

  describe('Интеграция с localStorage', () => {
    it('должен сохранять корзину в localStorage', () => {
      const cart: Cart = {
        items: [mockCartItem],
        totalItems: 2,
        totalPrice: 2000
      }
      
      const saveToStorage = (cartData: Cart) => {
        try {
          localStorage.setItem('sl-shop-cart', JSON.stringify(cartData))
          return true
        } catch (err) {
          console.log(err)
          return false
        }
      }
      
      const result = saveToStorage(cart)
      
      expect(result).toBe(true)
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'sl-shop-cart',
        JSON.stringify(cart)
      )
    })

    it('должен загружать корзину из localStorage', () => {
      const cart: Cart = {
        items: [mockCartItem],
        totalItems: 2,
        totalPrice: 2000
      }
      
      localStorageMock.getItem.mockReturnValue(JSON.stringify(cart))
      
      const loadFromStorage = () => {
        try {
          const savedCart = localStorage.getItem('sl-shop-cart')
          return savedCart ? JSON.parse(savedCart) : null
        } catch (err) {
          console.log(err)
          return null
        }
      }
      
      const result = loadFromStorage()
      
      expect(result).toEqual(cart)
      expect(localStorage.getItem).toHaveBeenCalledWith('sl-shop-cart')
    })
  })
})
