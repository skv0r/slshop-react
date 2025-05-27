"use client"

import { Button } from "@/shared/ui/components"
import { ArrowLeft } from "lucide-react"
import { usePaymentFlow } from "@/features/payment/model/usePaymentFlow"
import { PaymentForm, PaymentMethodSelector, OrderSummary } from "@/features/payment"

const Payment = () => {
  const {
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
    isCartEmpty,
  } = usePaymentFlow()

  // Если корзина пуста, показываем сообщение
  if (isCartEmpty) {
    return (
      <div className="py-8 px-[52px] min-h-[62vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
          <Button onClick={() => (window.location.href = "/catalog")}>Перейти в каталог</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-[52px] min-h-[62vh]">
      <div className="mb-8">
        <button onClick={goBackToCart} className="inline-flex items-center text-[#6366F1] hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться в корзину
        </button>
      </div>

      <h1 className="text-[48px] font-bold pb-8">Оплата заказа</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Форма оплаты */}
        <div className="space-y-6">
          <PaymentForm customerInfo={customerInfo} onInputChange={handleInputChange} />
          <PaymentMethodSelector
            availableMethods={availableMethods}
            selectedMethod={selectedMethod}
            onMethodChange={setSelectedMethod}
          />
        </div>

        {/* Сводка заказа */}
        <OrderSummary
          cart={cart}
          deliveryPrice={deliveryPrice}
          totalPrice={totalPrice}
          isProcessing={isProcessing}
          onPayment={handlePayment}
        />
      </div>
    </div>
  )
}

export default Payment
