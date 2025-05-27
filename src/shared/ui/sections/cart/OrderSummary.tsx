import { Button } from "../../components"
import { useCartActions } from "@/features/cart/model/useCartActions"

const OrderSummary = () => {
  const { cart, goToPayment } = useCartActions()

  const CartPrice = cart.totalPrice
  const deliveryPrice = (CartPrice >= 50000 || cart.totalItems === 0)  ? "Бесплатно" : 2000
  const totalPrice = CartPrice + (typeof deliveryPrice !== "number" ? 0 : deliveryPrice)

  return (
    <div className="w-96 min-h-64 mb-8 py-8 px-[52px] border-1 border-[#CBD5E1] rounded-md bg-white">
      <h3 className="text-xl font-bold mb-8">Сумма покупок</h3>
      <div className="flex justify-between mb-4">
        <span>Корзина</span>
        <span className="font-semibold">{CartPrice.toLocaleString()}₽</span>
      </div>
      <div className="flex justify-between mb-8">
        <span>Доставка</span>
        <span className="font-semibold">{typeof deliveryPrice !== "number" ? deliveryPrice : deliveryPrice + "₽"}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-semibold">Итоговая стоимость:</span>
        <span className="font-semibold">{totalPrice.toLocaleString()}₽</span>
      </div>
      <Button className="w-full" onClick={goToPayment} disabled={cart.totalItems === 0}>
        Оплатить покупки!
      </Button>
    </div>
  )
}

export default OrderSummary
