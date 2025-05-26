import useCart from "@/entities/cart/model/useCart"
import CartItem from "./CartItem"

const ProductList = () => {
  const { cart, updateQuantity, removeFromCart, isLoading } = useCart()


  if (isLoading) {
    return (
      <div className="w-4xl min-h-64 mb-8 py-8 px-[52px] border-1 border-[#CBD5E1] rounded-md">
        <div className="animate-pulse space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-100 rounded-md">
              <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
              <div className="flex-1 space-y-2">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (cart.items.length === 0) {
    return (
      <div className="w-4xl min-h-64 mb-8 py-8 px-[52px] border-1 border-[#CBD5E1] rounded-md">
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">Корзина пустая</h3>
          <p className="text-gray-500 mb-6">Добавьте товары из каталога, чтобы они появились здесь</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-4xl mb-8 py-8 px-[52px] border-1 border-[#CBD5E1] rounded-md">
      <h3 className="text-xl font-bold mb-6">Товары в корзине ({cart.totalItems})</h3>
      <div className="space-y-4">
        {cart.items.map((item) => (
          <CartItem key={item.productId} item={item} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
