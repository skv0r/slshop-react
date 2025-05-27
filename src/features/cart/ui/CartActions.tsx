import { Button } from "@/shared/ui/components"

interface CartActionsProps {
  totalItems: number
  onGoToCatalog: () => void
  onGoToPayment?: () => void
}

export const CartActions = ({ totalItems, onGoToCatalog }: CartActionsProps) => {
    console.log(totalItems)
    return (
        <div className="flex gap-4">
            <Button onClick={onGoToCatalog} variant="outline">
                Продолжить покупки
            </Button>
        </div>
    )
}
