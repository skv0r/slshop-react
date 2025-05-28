import { describe, it, expect } from 'vitest'
import {
  validateQuantity,
  incrementQuantity,
  decrementQuantity,
  canIncrement,
  canDecrement
} from './quantity'

describe('Утилиты для количества', () => {
  describe('validateQuantity', () => {
    it('должен возвращать минимальное количество, когда ввод ниже минимума', () => {
      expect(validateQuantity(0, 1)).toBe(1)
      expect(validateQuantity(-5, 1)).toBe(1)
      expect(validateQuantity(2, 5)).toBe(5)
    })

    it('должен возвращать максимальное количество, когда ввод выше максимума', () => {
      expect(validateQuantity(15, 1, 10)).toBe(10)
      expect(validateQuantity(100, 1, 50)).toBe(50)
    })

    it('должен возвращать введенное количество, когда оно в пределах границ', () => {
      expect(validateQuantity(5, 1, 10)).toBe(5)
      expect(validateQuantity(1, 1, 10)).toBe(1)
      expect(validateQuantity(10, 1, 10)).toBe(10)
    })

    it('должен работать без максимального лимита', () => {
      expect(validateQuantity(100, 1)).toBe(100)
      expect(validateQuantity(0, 1)).toBe(1)
    })
  })

  describe('incrementQuantity', () => {
    it('должен увеличивать количество на 1', () => {
      expect(incrementQuantity(5)).toBe(6)
      expect(incrementQuantity(0)).toBe(1)
      expect(incrementQuantity(10)).toBe(11)
    })

    it('должен учитывать максимальный лимит', () => {
      expect(incrementQuantity(9, 10)).toBe(10)
      expect(incrementQuantity(10, 10)).toBe(10)
      expect(incrementQuantity(5, 10)).toBe(6)
    })

    it('должен работать без максимального лимита', () => {
      expect(incrementQuantity(999)).toBe(1000)
    })
  })

  describe('decrementQuantity', () => {
    it('должен уменьшать количество на 1', () => {
      expect(decrementQuantity(5)).toBe(4)
      expect(decrementQuantity(10)).toBe(9)
      expect(decrementQuantity(2)).toBe(1)
    })

    it('должен учитывать минимальный лимит', () => {
      expect(decrementQuantity(1, 1)).toBe(1)
      expect(decrementQuantity(2, 1)).toBe(1)
      expect(decrementQuantity(5, 3)).toBe(4)
      expect(decrementQuantity(3, 3)).toBe(3)
    })

    it('должен работать с пользовательским минимумом', () => {
      expect(decrementQuantity(10, 5)).toBe(9)
      expect(decrementQuantity(5, 5)).toBe(5)
    })
  })

  describe('canIncrement', () => {
    it('должен возвращать true, когда нет максимального лимита', () => {
      expect(canIncrement(5)).toBe(true)
      expect(canIncrement(100)).toBe(true)
      expect(canIncrement(0)).toBe(true)
    })

    it('должен возвращать true, когда ниже максимума', () => {
      expect(canIncrement(5, 10)).toBe(true)
      expect(canIncrement(9, 10)).toBe(true)
      expect(canIncrement(0, 10)).toBe(true)
    })

    it('должен возвращать false, когда достигнут максимум', () => {
      expect(canIncrement(10, 10)).toBe(false)
      expect(canIncrement(5, 5)).toBe(false)
    })

    it('должен возвращать false, когда выше максимума', () => {
      expect(canIncrement(11, 10)).toBe(false)
      expect(canIncrement(15, 10)).toBe(false)
    })
  })

  describe('canDecrement', () => {
    it('должен возвращать true, когда выше минимума', () => {
      expect(canDecrement(5, 1)).toBe(true)
      expect(canDecrement(10, 5)).toBe(true)
      expect(canDecrement(2, 1)).toBe(true)
    })

    it('должен возвращать false, когда достигнут минимум', () => {
      expect(canDecrement(1, 1)).toBe(false)
      expect(canDecrement(5, 5)).toBe(false)
      expect(canDecrement(3, 3)).toBe(false)
    })

    it('должен возвращать false, когда ниже минимума', () => {
      expect(canDecrement(0, 1)).toBe(false)
      expect(canDecrement(2, 5)).toBe(false)
    })

    it('должен работать с минимальным значением по умолчанию 1', () => {
      expect(canDecrement(2)).toBe(true)
      expect(canDecrement(1)).toBe(false)
      expect(canDecrement(0)).toBe(false)
    })
  })
})
