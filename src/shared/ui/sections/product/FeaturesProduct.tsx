import { Star, Heart, Share2 } from "lucide-react"

const FeaturesProduct = () => {
    return (
        <div className="border-1 border-[#CBD5E1] rounded-md p-8 mb-16">
        <h2 className="text-[32px] font-bold mb-8">Особенности товара</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-[#F1F5F9] rounded-md">
            <div className="w-16 h-16 bg-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">Высокое качество</h3>
            <p className="text-sm text-gray-600">Только проверенные бренды и оригинальная продукция</p>
          </div>
          <div className="text-center p-6 bg-[#F1F5F9] rounded-md">
            <div className="w-16 h-16 bg-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">Гарантия качества</h3>
            <p className="text-sm text-gray-600">Официальная гарантия производителя на все товары</p>
          </div>
          <div className="text-center p-6 bg-[#F1F5F9] rounded-md">
            <div className="w-16 h-16 bg-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Share2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">Быстрая доставка</h3>
            <p className="text-sm text-gray-600">Доставка по Москве в течение 1-2 дней</p>
          </div>
        </div>
      </div>
    )
}

export default FeaturesProduct