import { Link } from "react-router-dom"
import { Button } from "@/shared/ui/components"
import { Trash2, Plus, Minus } from "lucide-react"
import type { CartItem as CartItemType } from "@/entities/cart"
import { createQuantityHandler, canDecrement } from "@/shared/utils"

interface CartItemProps {
  item: CartItemType
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemove: (productId: string) => void
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const handleQuantityChange = createQuantityHandler((quantity) => onUpdateQuantity(item.productId, quantity), 1)

  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-[#CBD5E1] rounded-md">
      {/* Product Image */}
      <Link to={`/product/${item.productId}`} className="flex-shrink-0">
        <img
          src={item.product.image || "/placeholder.svg"}
          alt={item.product.title}
          className="w-20 h-20 object-contain bg-gray-50 rounded-md border border-[#CBD5E1]"
        />
      </Link>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/product/${item.productId}`}
          className="text-lg font-semibold text-gray-900 hover:text-[#6366F1] transition-colors line-clamp-2"
        >
          {item.product.title}
        </Link>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.product.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-500">Категория:</span>
          <span className="text-sm font-medium capitalize">{item.product.category}</span>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <div className="text-lg font-bold text-[#6366F1]">{item.product.price.toLocaleString()} ₽</div>
        <div className="text-sm text-gray-500">за единицу</div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(-1)}
          disabled={!canDecrement(item.quantity, 1)}
          className="p-2 rounded-md border border-[#CBD5E1] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-12 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="p-2 rounded-md border border-[#CBD5E1] hover:bg-gray-50 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Total Price */}
      <div className="text-right min-w-[100px]">
        <div className="text-xl font-bold">{(item.product.price * item.quantity).toLocaleString()} ₽</div>
        <div className="text-sm text-gray-500">итого</div>
      </div>

      {/* Remove Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onRemove(item.productId)}
        className="text-red-600 hover:text-red-700 hover:border-red-300"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default CartItem
