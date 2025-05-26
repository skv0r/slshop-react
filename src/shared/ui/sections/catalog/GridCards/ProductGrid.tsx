import { Card } from "@/shared/ui/components"
import type { Product } from "@/entities/product"

interface ProductGridProps {
  products: Product[]
  isLoading: boolean
}
const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  if (isLoading) {
    // Show loading skeleton
    return (
      <div className="max-w-[920px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 w-[288px] h-[230px] rounded-t-lg"></div>
            <div className="p-5 bg-white rounded-b-lg">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="flex justify-between">
                <div className="h-9 bg-gray-200 rounded w-1/2"></div>
                <div className="h-9 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="max-w-[920px] flex items-center justify-center h-[400px] bg-white rounded-lg border border-[#CBD5E1]">
        <div className="text-center">
          <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
          <p className="text-gray-500">Попробуйте изменить параметры фильтрации</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[920px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
      {products.map((product) => (
        <Card
          key={product.id}
          imageUrl={product.image}
          title={product.title}
          price={`${product.price.toLocaleString()} ₽`}
          variant="compact"
        />
      ))}
    </div>
  )
}

export default ProductGrid;