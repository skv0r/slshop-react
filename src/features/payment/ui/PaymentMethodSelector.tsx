import { CreditCard, Smartphone } from "lucide-react"
import type { PaymentStrategy, PaymentMethod } from "@/entities/payment"

interface PaymentMethodSelectorProps {
  availableMethods: PaymentStrategy[]
  selectedMethod: PaymentMethod
  onMethodChange: (method: PaymentMethod) => void
}

export const PaymentMethodSelector = ({
  availableMethods,
  selectedMethod,
  onMethodChange,
}: PaymentMethodSelectorProps) => {
  return (
    <div className="bg-white border border-[#CBD5E1] rounded-md p-6">
      <h3 className="text-xl font-bold mb-4">Способ оплаты</h3>
      <div className="space-y-3">
        {availableMethods.map((method) => (
          <label
            key={method.name}
            className="flex items-center p-4 border border-[#CBD5E1] rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method.name}
              checked={selectedMethod === method.name}
              onChange={(e) => onMethodChange(e.target.value as PaymentMethod)}
              className="mr-3 appearance-none checked:bg-[#6366F1] checked:border-transparent border border-[#CBD5E1] rounded-full w-3 h-3"
            />
            <div className="flex items-center">
              {method.name === "card" ? (
                <CreditCard className="h-5 w-5 mr-3 text-[#6366F1]" />
              ) : (
                <Smartphone className="h-5 w-5 mr-3 text-[#6366F1]" />
              )}
              <span className="font-medium">{method.displayName}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
