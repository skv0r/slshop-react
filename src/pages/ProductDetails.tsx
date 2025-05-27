import { useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "@/entities/product/api/productApi"
import type { Product } from "@/entities/product/model/types"
import { ProductNotFound } from "@/shared/ui"
import FeaturesProduct from "@/shared/ui/sections/product/FeaturesProduct"
import ProductContent from "@/shared/ui/sections/product/ProductContent"

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return

      setIsLoading(true)
      setError(null)

      try {
        const productData = await getProductById(id)
        if (productData) {
          setProduct(productData)
        } else {
          setError("Товар не найден")
        }
      } catch (err) {
        setError("Ошибка при загрузке товара")
        console.log(err)
        
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (isLoading) {
    return (
      <div className="py-8 px-[52px]">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="h-[500px] bg-gray-200 rounded-md"></div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (<ProductNotFound error={error || ''}/>)
  }

  return (
    <div className="py-8 px-[52px]">
        <ProductContent
        product={product} 
        quantity={quantity} 
        setQuantity={setQuantity} 
        selectedImage={selectedImage} 
        setSelectedImage={setSelectedImage} 
        />
        <FeaturesProduct/>
    </div>
  )
}

export default ProductDetail
