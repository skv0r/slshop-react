import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CardPaymentStrategy, SBPPaymentStrategy, PaymentProcessor } from './strategies'
import type { PaymentData } from './types'

const mockMath = Object.create(global.Math)
mockMath.random = vi.fn()
global.Math = mockMath

describe('Стратегии оплаты', () => {
  const mockPaymentData: PaymentData = {
    amount: 1000,
    currency: 'RUB',
    orderId: 'test-order-123',
    customerInfo: {
      name: 'Тестовый пользователь',
      email: 'test@example.com',
      phone: '+7 123 456 7890'
    }
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('CardPaymentStrategy', () => {
    let strategy: CardPaymentStrategy

    beforeEach(() => {
      strategy = new CardPaymentStrategy()
    })

    it('должен иметь правильное имя и отображаемое имя', () => {
      expect(strategy.name).toBe('card')
      expect(strategy.displayName).toBe('Банковская карта')
    })

    it('должен обрабатывать успешный платеж', async () => {
      // Мокаем успешный результат (Math.random > 0.3)
      vi.mocked(Math.random).mockReturnValue(0.5)

      const result = await strategy.process(mockPaymentData)

      expect(result.success).toBe(true)
      expect(result.orderId).toBe(mockPaymentData.orderId)
      expect(result.transactionId).toMatch(/^card_\d+_[a-z0-9]+$/)
      expect(result.errorMessage).toBeUndefined()
    })

    it('должен обрабатывать неуспешный платеж', async () => {
      // Мокаем неуспешный результат (Math.random <= 0.3)
      vi.mocked(Math.random).mockReturnValue(0.2)

      const result = await strategy.process(mockPaymentData)

      expect(result.success).toBe(false)
      expect(result.orderId).toBe(mockPaymentData.orderId)
      expect(result.transactionId).toBeUndefined()
      expect(result.errorMessage).toBe('Недостаточно средств на карте')
    })
  })

  describe('SBPPaymentStrategy', () => {
    let strategy: SBPPaymentStrategy

    beforeEach(() => {
      strategy = new SBPPaymentStrategy()
    })

    it('должен иметь правильное имя и отображаемое имя', () => {
      expect(strategy.name).toBe('sbp')
      expect(strategy.displayName).toBe('Система быстрых платежей (СБП)')
    })

    it('должен обрабатывать успешный платеж', async () => {
      // Мокаем успешный результат (Math.random > 0.2)
      vi.mocked(Math.random).mockReturnValue(0.5)

      const result = await strategy.process(mockPaymentData)

      expect(result.success).toBe(true)
      expect(result.orderId).toBe(mockPaymentData.orderId)
      expect(result.transactionId).toMatch(/^sbp_\d+_[a-z0-9]+$/)
      expect(result.errorMessage).toBeUndefined()
    })

    it('должен обрабатывать неуспешный платеж', async () => {
      // Мокаем неуспешный результат (Math.random <= 0.2)
      vi.mocked(Math.random).mockReturnValue(0.1)

      const result = await strategy.process(mockPaymentData)

      expect(result.success).toBe(false)
      expect(result.orderId).toBe(mockPaymentData.orderId)
      expect(result.transactionId).toBeUndefined()
      expect(result.errorMessage).toBe('Недостаточно средств на счете')
    })
  })

  describe('PaymentProcessor', () => {
    let processor: PaymentProcessor

    beforeEach(() => {
      processor = new PaymentProcessor()
    })

    it('должен возвращать правильную стратегию для платежа картой', () => {
      const strategy = processor.getStrategy('card')
      
      expect(strategy).toBeInstanceOf(CardPaymentStrategy)
      expect(strategy?.name).toBe('card')
    })

    it('должен возвращать правильную стратегию для платежа через СБП', () => {
      const strategy = processor.getStrategy('sbp')
      
      expect(strategy).toBeInstanceOf(SBPPaymentStrategy)
      expect(strategy?.name).toBe('sbp')
    })

    it('должен возвращать undefined для неизвестного способа оплаты', () => {
      const strategy = processor.getStrategy('unknown')
      
      expect(strategy).toBeUndefined()
    })

    it('должен возвращать все доступные методы', () => {
      const methods = processor.getAvailableMethods()
      
      expect(methods).toHaveLength(2)
      expect(methods.map(m => m.name)).toEqual(['card', 'sbp'])
    })

    it('должен обрабатывать платеж с действительным методом', async () => {
      vi.mocked(Math.random).mockReturnValue(0.5) // Успешный платеж
      
      const result = await processor.processPayment('card', mockPaymentData)
      
      expect(result.success).toBe(true)
      expect(result.orderId).toBe(mockPaymentData.orderId)
    })

    it('должен обрабатывать недействительный способ оплаты', async () => {
      const result = await processor.processPayment('invalid', mockPaymentData)
      
      expect(result.success).toBe(false)
      expect(result.orderId).toBe(mockPaymentData.orderId)
      expect(result.errorMessage).toBe('Неподдерживаемый способ оплаты')
    })
  })
})
