/**
 * Утилиты для работы с количеством товаров
 */

/**
 * Создает функцию для изменения количества с ограничениями
 * @param setQuantity - функция для обновления состояния количества
 * @param minQuantity - минимальное количество (по умолчанию 1)
 * @param maxQuantity - максимальное количество (по умолчанию без ограничений)
 * @returns функция для изменения количества
 */
export const createQuantityHandler = (
    setQuantity: (value: number | ((prev: number) => number)) => void,
    minQuantity = 1,
    maxQuantity?: number,
  ) => {
    return (delta: number) => {
      setQuantity((prev) => {
        const newQuantity = prev + delta
  
        // Применяем ограничения
        if (newQuantity < minQuantity) {
          return minQuantity
        }
  
        if (maxQuantity !== undefined && newQuantity > maxQuantity) {
          return maxQuantity
        }
  
        return newQuantity
      })
    }
  }
  
  /**
   * Валидирует количество и возвращает корректное значение
   * @param quantity - проверяемое количество
   * @param minQuantity - минимальное количество (по умолчанию 1)
   * @param maxQuantity - максимальное количество (по умолчанию без ограничений)
   * @returns корректное количество
   */
  export const validateQuantity = (quantity: number, minQuantity = 1, maxQuantity?: number): number => {
    if (quantity < minQuantity) {
      return minQuantity
    }
  
    if (maxQuantity !== undefined && quantity > maxQuantity) {
      return maxQuantity
    }
  
    return quantity
  }
  
  /**
   * Увеличивает количество на 1 с учетом ограничений
   * @param currentQuantity - текущее количество
   * @param maxQuantity - максимальное количество
   * @returns новое количество
   */
  export const incrementQuantity = (currentQuantity: number, maxQuantity?: number): number => {
    const newQuantity = currentQuantity + 1
    return maxQuantity !== undefined && newQuantity > maxQuantity ? maxQuantity : newQuantity
  }
  
  /**
   * Уменьшает количество на 1 с учетом ограничений
   * @param currentQuantity - текущее количество
   * @param minQuantity - минимальное количество (по умолчанию 1)
   * @returns новое количество
   */
  export const decrementQuantity = (currentQuantity: number, minQuantity = 1): number => {
    const newQuantity = currentQuantity - 1
    return newQuantity < minQuantity ? minQuantity : newQuantity
  }
  
  /**
   * Проверяет, можно ли увеличить количество
   * @param currentQuantity - текущее количество
   * @param maxQuantity - максимальное количество
   * @returns true, если можно увеличить
   */
  export const canIncrement = (currentQuantity: number, maxQuantity?: number): boolean => {
    return maxQuantity === undefined || currentQuantity < maxQuantity
  }
  
  /**
   * Проверяет, можно ли уменьшить количество
   * @param currentQuantity - текущее количество
   * @param minQuantity - минимальное количество (по умолчанию 1)
   * @returns true, если можно уменьшить
   */
  export const canDecrement = (currentQuantity: number, minQuantity = 1): boolean => {
    return currentQuantity > minQuantity
  }
  