import { useLocation, Link } from "react-router-dom"
import { Button } from "@/shared/ui/components"
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react"

const PaymentFailure = () => {
  const location = useLocation()
  const { orderId, errorMessage } = location.state || {}

  return (
    <div className="py-8 px-[52px] min-h-[62vh]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <XCircle className="h-24 w-24 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-red-600 mb-4">Оплата не прошла</h1>
          <p className="text-xl text-gray-600 mb-8">К сожалению, при обработке платежа произошла ошибка</p>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Детали ошибки</h2>
          <div className="space-y-4 text-left">
            {orderId && (
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Номер заказа:</span>
                <span className="font-bold text-gray-600">#{orderId}</span>
              </div>
            )}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium">Причина отклонения:</span>
              <span className="text-red-600 font-medium">{errorMessage || "Недостаточно средств"}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-medium">Статус:</span>
              <span className="text-red-600 font-bold">Не оплачено</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-yellow-800 mb-2">Что можно сделать?</h3>
          <ul className="text-yellow-700 text-left space-y-2">
            <li>• Проверьте баланс на карте или счете</li>
            <li>• Попробуйте другой способ оплаты</li>
            <li>• Обратитесь в службу поддержки банка</li>
            <li>• Свяжитесь с нашей службой поддержки</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          <Link to="/cart">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Вернуться в корзину
            </Button>
          </Link>
          <Link to="/payment">
            <Button size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Попробовать снова
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Нужна помощь?</p>
          <Link to="/contact" className="text-[#6366F1] hover:underline">
            Свяжитесь с нашей службой поддержки
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailure
