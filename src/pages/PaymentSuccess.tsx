import { useLocation, Link } from "react-router-dom"
import { Button } from "@/shared/ui/components"
import { CheckCircle, Home, Package, AlertCircle } from "lucide-react"

const PaymentSuccess = () => {
  const location = useLocation()
  const { orderId, transactionId, amount } = location.state || {}

  // Если нет данных о заказе, показываем сообщение об ошибке вместо редиректа
  if (!orderId) {
    return (
      <div className="py-8 px-[52px] min-h-[62vh]">
        <div className="max-w-2xl mx-auto text-center">
          <AlertCircle className="h-24 w-24 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-yellow-600 mb-4">Данные о заказе не найдены</h1>
          <p className="text-xl text-gray-600 mb-8">
            Возможно, страница была обновлена или данные о заказе были потеряны
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <p className="text-yellow-700">
              Если вы только что совершили покупку, проверьте свою электронную почту для подтверждения заказа. При
              возникновении проблем обратитесь в службу поддержки.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button variant="outline" size="lg">
                <Home className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg">Связаться с поддержкой</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-[52px] min-h-[62vh]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-green-600 mb-4">Спасибо за покупку!</h1>
          <p className="text-xl text-gray-600 mb-8">Ваш заказ успешно оформлен и принят в обработку</p>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Детали заказа</h2>
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium">Номер заказа:</span>
              <span className="font-bold text-[#6366F1]">#{orderId}</span>
            </div>
            {transactionId && (
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">ID транзакции:</span>
                <span className="text-gray-600 font-mono text-sm">{transactionId}</span>
              </div>
            )}
            {amount && (
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Сумма оплаты:</span>
                <span className="font-bold text-green-600">{amount.toLocaleString()} ₽</span>
              </div>
            )}
            <div className="flex justify-between items-center py-3">
              <span className="font-medium">Статус:</span>
              <span className="text-green-600 font-bold">Оплачено</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <Package className="h-8 w-8 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-blue-800 mb-2">Что дальше?</h3>
          <p className="text-blue-700 mb-4">
            Мы отправили подтверждение заказа на указанный email. В ближайшее время с вами свяжется наш менеджер для
            уточнения деталей доставки.
          </p>
          <p className="text-sm text-blue-600">Ожидаемое время доставки: 1-3 рабочих дня</p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              <Home className="mr-2 h-4 w-4" />
              На главную
            </Button>
          </Link>
          <Link to="/catalog">
            <Button size="lg">Продолжить покупки</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
