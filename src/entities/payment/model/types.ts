export interface PaymentData {
    amount: number
    currency: string
    orderId: string
    customerInfo: {
      name: string
      email: string
      phone: string
    }
  }
  
export interface PaymentResult {
    success: boolean
    orderId: string
    transactionId?: string
    errorMessage?: string
  }
  
export interface PaymentStrategy {
    name: string
    displayName: string
    process(data: PaymentData): Promise<PaymentResult>
  }
  
export type PaymentMethod = "card" | "sbp"
  
export interface PaymentState {
    isProcessing: boolean
    error: string | null
    result: PaymentResult | null
  }
  