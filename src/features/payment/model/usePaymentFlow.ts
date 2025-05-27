import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import useCart from "@/entities/cart/model/useCart"
import usePayment from "@/entities/payment/model/usePayment"
import type { PaymentMethod, PaymentData } from "@/entities/payment"
import { createOrder } from "@/shared/api/orders"

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
  }, [customerInfo, cart])

  const deliveryPrice = cart.totalPrice >= 30000 ? 0 : 100
  const totalPrice = cart.totalPrice + deliveryPrice

  const handlePayment = useCallback(async () => {
    console.log("🚀 Начинаем процесс оплаты")
    console.log("Данные корзины:", cart)
    console.log("Данные клиента:", customerInfo)

    const validationError = validateForm()
    if (validationError) {
      console.log("❌ Ошибка валидации:", validationError)
      alert(validationError)
      if (cart.totalItems === 0) {
        navigate("/cart")
      }
      return
    }

    const orderId = generateOrderId()
    console.log("📝 Сгенерирован ID заказа:", orderId)

    const paymentData: PaymentData = {
      amount: cart.totalPrice,
      currency: "RUB",
      orderId,
      customerInfo,
    }

    console.log("💳 Обрабатываем платеж с данными:", paymentData)
    const result = await processPayment(selectedMethod, paymentData)
    console.log("💳 Результат платежа:", result)

    if (result.success) {
      console.log("✅ Платеж успешен, сохраняем заказ в БД")

      // Сохраняем заказ в базу данных
      try {
        const orderData = {
          orderNumber: orderId,
          customerName: customerInfo.name,
          customerEmail: customerInfo.email,
          customerPhone: customerInfo.phone,
          totalAmount: totalPrice,
          paymentMethod: selectedMethod,
          transactionId: result.transactionId,
          items: cart.items,
        }

        console.log("📦 Данные для сохранения заказа:", orderData)

        const orderResult = await createOrder(orderData)
        console.log("📦 Результат сохранения заказа:", orderResult)

        if (!orderResult.success) {
          console.error("❌ Ошибка сохранения заказа:", orderResult.error)
          alert("Заказ обработан, но возникла ошибка при сохранении. Обратитесь в поддержку.")
        } else {
          console.log("✅ Заказ успешно сохранен с ID:", orderResult.orderId)
        }
      } catch (error) {
        console.error("💥 Критическая ошибка при сохранении заказа:", error)
      }

      console.log("🎉 Переходим на страницу успеха")
      navigate("/payment/success", {
        state: {
          orderId: result.orderId,
          transactionId: result.transactionId,
          amount: totalPrice,
        },
        replace: true,
      })

      setTimeout(() => {
        console.log("🧹 Очищаем корзину")
        clearCart()
      }, 100)
    } else {
      console.log("❌ Платеж неуспешен, переходим на страницу ошибки")
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
    customerInfo,
    processPayment,
    selectedMethod,
    navigate,
    clearCart,
    cart,
    totalPrice,
  ])

  const goBackToCart = useCallback(() => {
    navigate("/cart")
  }, [navigate])

  return {
    selectedMethod,
    customerInfo,
    availableMethods,
    isProcessing,
    cart,
    deliveryPrice,
    totalPrice,
    setSelectedMethod,
    handleInputChange,
    handlePayment,
    goBackToCart,
    isCartEmpty: cart.totalItems === 0,
  }
}
