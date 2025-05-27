import type { PaymentStrategy, PaymentData, PaymentResult } from "./types"


export class CardPaymentStrategy implements PaymentStrategy {
  name = "card"
  displayName = "Банковская карта"

  async process(data: PaymentData): Promise<PaymentResult> {
    // Имитация обработки платежа
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Симуляция случайного результата (70% успех, 30% неудача)
    const isSuccess = Math.random() > 0.3

    if (isSuccess) {
      return {
        success: true,
        orderId: data.orderId,
        transactionId: `card_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      }
    } else {
      return {
        success: false,
        orderId: data.orderId,
        errorMessage: "Недостаточно средств на карте",
      }
    }
  }
}

// Стратегия оплаты через СБП
export class SBPPaymentStrategy implements PaymentStrategy {
  name = "sbp"
  displayName = "Система быстрых платежей (СБП)"

  async process(data: PaymentData): Promise<PaymentResult> {
    // Имитация обработки платежа
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Симуляция случайного результата (80% успех, 20% неудача)
    const isSuccess = Math.random() > 0.2

    if (isSuccess) {
      return {
        success: true,
        orderId: data.orderId,
        transactionId: `sbp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      }
    } else {
      return {
        success: false,
        orderId: data.orderId,
        errorMessage: "Недостаточно средств на счете",
      }
    }
  }
}

// Контекст для выбора стратегии оплаты
export class PaymentProcessor {
  private strategies: Map<string, PaymentStrategy> = new Map()

  constructor() {
    this.strategies.set("card", new CardPaymentStrategy())
    this.strategies.set("sbp", new SBPPaymentStrategy())
  }

  getStrategy(method: string): PaymentStrategy | undefined {
    return this.strategies.get(method)
  }

  async processPayment(method: string, data: PaymentData): Promise<PaymentResult> {
    const strategy = this.getStrategy(method)

    if (!strategy) {
      return {
        success: false,
        orderId: data.orderId,
        errorMessage: "Неподдерживаемый способ оплаты",
      }
    }

    return await strategy.process(data)
  }

  getAvailableMethods(): PaymentStrategy[] {
    return Array.from(this.strategies.values())
  }
}
