import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import useCart from "@/entities/cart/model/useCart"
import usePayment from "@/entities/payment/model/usePayment"
import type { PaymentMethod, PaymentData } from "@/entities/payment"

interface CustomerInfo {
  name: string
  email: string
  phone: string
}

export const usePaymentFlow = () => {
  const navigate = useNavigate()
  const { cart, clearCart } = useCart()
  const { processPayment, isProcessing, getAvailableMethods } = usePayment()

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("card")
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
  })

  const availableMethods = getAvailableMethods()

  const handleInputChange = useCallback((field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
  }, [])

  const generateOrderId = useCallback(() => {
    return Math.floor(Math.random() * 1000000).toString()
  }, [])

  const validateForm = useCallback(() => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      return "Пожалуйста, заполните все поля"
    }

    if (cart.totalItems === 0) {
      return "Корзина пуста"
    }

    return null
  }, [customerInfo, cart.totalItems])

  const handlePayment = useCallback(async () => {
    const validationError = validateForm()
    if (validationError) {
      alert(validationError)
      if (cart.totalItems === 0) {
        navigate("/cart")
      }
      return
    }

    const orderId = generateOrderId()

    const paymentData: PaymentData = {
      amount: cart.totalPrice,
      currency: "RUB",
      orderId,
      customerInfo,
    }

    const result = await processPayment(selectedMethod, paymentData)

    if (result.success) {
      // Сначала переходим на страницу успеха, ПОТОМ очищаем корзину
      navigate("/payment/success", {
        state: {
          orderId: result.orderId,
          transactionId: result.transactionId,
          amount: cart.totalPrice,
        },
        replace: true,
      })

      // Очищаем корзину с небольшой задержкой
      setTimeout(() => {
        clearCart()
      }, 100)
    } else {
      navigate("/payment/failure", {
        state: {
          orderId: result.orderId,
          errorMessage: result.errorMessage,
        },
        replace: true,
      })
    }
  }, [
    validateForm,
    generateOrderId,
    cart.totalPrice,
    customerInfo,
    processPayment,
    selectedMethod,
    navigate,
    clearCart,
    cart.totalItems,
  ])

  const goBackToCart = useCallback(() => {
    navigate("/cart")
  }, [navigate])

  const deliveryPrice = cart.totalPrice >= 30000 ? 0 : 100
  const totalPrice = cart.totalPrice + deliveryPrice

  return {
    // State
    selectedMethod,
    customerInfo,
    availableMethods,
    isProcessing,
    cart,
    deliveryPrice,
    totalPrice,

    // Actions
    setSelectedMethod,
    handleInputChange,
    handlePayment,
    goBackToCart,

    // Computed
    isCartEmpty: cart.totalItems === 0,
  }
}
