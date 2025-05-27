import { Input } from "@/shared/ui/components"

interface CustomerInfo {
  name: string
  email: string
  phone: string
}

interface PaymentFormProps {
  customerInfo: CustomerInfo
  onInputChange: (field: keyof CustomerInfo, value: string) => void
}

export const PaymentForm = ({ customerInfo, onInputChange }: PaymentFormProps) => {
  return (
    <div className="bg-white border border-[#CBD5E1] rounded-md p-6">
      <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Имя и фамилия</label>
          <Input
            value={customerInfo.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            placeholder="Введите ваше имя и фамилию"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <Input
            type="email"
            value={customerInfo.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            placeholder="Введите ваш email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Телефон</label>
          <Input
            type="tel"
            value={customerInfo.phone}
            onChange={(e) => onInputChange("phone", e.target.value)}
            placeholder="Введите ваш телефон"
            required
          />
        </div>
      </div>
    </div>
  )
}
