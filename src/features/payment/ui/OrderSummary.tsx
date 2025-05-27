import { Button } from "@/shared/ui/components"
import { Loader2 } from "lucide-react"
import type { Cart } from "@/entities/cart"

interface OrderSummaryProps {
  cart: Cart
  deliveryPrice: number
  totalPrice: number
  isProcessing: boolean
  onPayment: () => void
}

export const OrderSummary = ({ cart, deliveryPrice, totalPrice, isProcessing, onPayment }: OrderSummaryProps) => {
  return (
    <div className="bg-white border border-[#CBD5E1] rounded-md p-6 h-fit">
      <h3 className="text-xl font-bold mb-6">Сводка заказа</h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span>Товары ({cart.totalItems} шт.)</span>
          <span className="font-semibold">{cart.totalPrice.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between">
          <span>Доставка</span>
          <span className="font-semibold">{deliveryPrice === 0 ? "Бесплатно" : `${deliveryPrice} ₽`}</span>
        </div>
        <hr className="border-[#CBD5E1]" />
        <div className="flex justify-between text-lg">
          <span className="font-bold">Итого к оплате:</span>
          <span className="font-bold text-[#6366F1]">{totalPrice.toLocaleString()} ₽</span>
        </div>
      </div>

      <Button className="w-full text-lg py-3" onClick={onPayment} disabled={isProcessing}>
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Обработка платежа...
          </>
        ) : (
          `Оплатить ${totalPrice.toLocaleString()} ₽`
        )}
      </Button>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Нажимая кнопку "Оплатить", вы соглашаетесь с условиями оферты
      </p>
    </div>
  )
}
