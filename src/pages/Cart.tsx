import { ProductList, OrderSummary } from "@/shared/ui"
import { useCartActions } from "@/features/cart/model/useCartActions"
import { CartActions } from "@/features/cart"

const Cart = () => {
  const { cart, goToCatalog } = useCartActions()

  return (
    <div className="py-8 px-[52px] min-h-[62vh]">
      <h1 className="text-[48px] font-bold pb-4">Корзина</h1>
      <div className="flex justify-between">
        <ProductList />
        <OrderSummary />
      </div>
      <CartActions totalItems={cart.totalItems} onGoToCatalog={goToCatalog} />
    </div>
  )
}

export default Cart
