"use client"

import { useState, useCallback } from "react"
import type { PaymentState, PaymentData, PaymentResult, PaymentMethod } from "./types"
import { PaymentProcessor } from "./strategies"

const usePayment = () => {
  const [state, setState] = useState<PaymentState>({
    isProcessing: false,
    error: null,
    result: null,
  })

  const processor = new PaymentProcessor()

  const processPayment = useCallback(async (method: PaymentMethod, data: PaymentData): Promise<PaymentResult> => {
    setState((prev) => ({
      ...prev,
      isProcessing: true,
      error: null,
      result: null,
    }))

    try {
      const result = await processor.processPayment(method, data)

      setState((prev) => ({
        ...prev,
        isProcessing: false,
        result,
      }))

      return result
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Произошла ошибка при обработке платежа"

      setState((prev) => ({
        ...prev,
        isProcessing: false,
        error: errorMessage,
      }))

      return {
        success: false,
        orderId: data.orderId,
        errorMessage,
      }
    }
  }, [])

  const resetPayment = useCallback(() => {
    setState({
      isProcessing: false,
      error: null,
      result: null,
    })
  }, [])

  const getAvailableMethods = useCallback(() => {
    return processor.getAvailableMethods()
  }, [])

  return {
    ...state,
    processPayment,
    resetPayment,
    getAvailableMethods,
  }
}

export default usePayment
