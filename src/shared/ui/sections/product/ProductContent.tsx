import { Link } from "react-router-dom"
import { Button } from "@/shared/ui/components"
import { ArrowLeft, Star, Plus, Minus, Heart, Share2 } from "lucide-react"
import type { Product } from "@/entities/product/model/types"
import { createQuantityHandler } from "@/shared/utils"
import useCart from "@/entities/cart/model/useCart"

interface ProductContentProps {
  product: Product
  quantity: number
  setQuantity: (value: number | ((prev: number) => number)) => void;
  selectedImage: number
  setSelectedImage: (index: number) => void
}

const ProductContent = ({ 
    product,
    quantity,
    setQuantity,
    selectedImage,
    setSelectedImage 
}: ProductContentProps) => {

  const images = [product.image, product.image, product.image]
  const { addToCart, isInCart, getItemQuantity } = useCart()
  const handleQuantityChange = createQuantityHandler(setQuantity)
  const isProductInCart = isInCart(product.id)
  const cartQuantity = getItemQuantity(product.id)

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <>
      <div className="mb-8">
        <Link to="/catalog" className="inline-flex items-center text-[#6366F1] hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться в каталог
        </Link>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border-1 border-[#CBD5E1] rounded-md overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full object-contain bg-gray-50"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-md overflow-hidden w-20 h-20 ${
                  selectedImage === index ? "border-[#6366F1]" : "border-[#CBD5E1]"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-[48px] font-bold mb-4">{product.title}</h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating!.rate) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating.rate} ({product.rating.count} отзывов)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="text-[32px] font-bold text-[#6366F1] mb-6">{product.price.toLocaleString()} ₽</div>
          </div>

          {/* Cart Status */}
          {isProductInCart && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <p className="text-green-800 font-medium">✓ Товар уже в корзине ({cartQuantity} шт.)</p>
              <Link to="/cart" className="text-green-600 hover:text-green-700 underline text-sm">
                Перейти в корзину
              </Link>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium">Количество:</span>
              <div className="flex items-center border-1 border-[#CBD5E1] rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-6 py-3 bg-[#F1F5F9] min-w-[60px] text-center">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="p-3 hover:bg-gray-50 transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 text-lg py-3" onClick={handleAddToCart}>
                {isProductInCart ? "Добавить ещё" : "Добавить в корзину"}
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-1 border-[#CBD5E1] rounded-md p-6 space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Категория:</span>
              <span className="text-gray-600 capitalize">{product.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Артикул:</span>
              <span className="text-gray-600">#{product.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Наличие:</span>
              <span className="text-green-600 font-medium">В наличии</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Доставка:</span>
              <span className="text-gray-600">1-3 рабочих дня</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductContent
