import { Button } from "../../components";

const CartPrice = 500;
const deliveryPrice = CartPrice >= 499 ? "Бесплатно" : 100;
const totalPrice = CartPrice + (typeof(deliveryPrice) !== "number" ? 0 : deliveryPrice)


const OrderSummary = () => {
    return (
        <div className="w-96 min-h-64 mb-8 py-8 px-[52px] border-1 border-[#CBD5E1] rounded-md bg-white">
            <h3 className="text-xl font-bold mb-8">Сумма покупок</h3>
            <div className="flex justify-between mb-4">
                <span>Корзина</span>
                <span className="font-semibold">{CartPrice}$</span>
            </div>
            <div className="flex justify-between mb-8">
                <span>Доставка</span>
                <span className="font-semibold">{typeof(deliveryPrice) !== "number" ? deliveryPrice : deliveryPrice + "$" }</span>
            </div>
            <div className="flex justify-between mb-4">
                <span className="font-semibold">Итоговая стоимость:</span>
                <span className="font-semibold">{totalPrice}$</span> 
            </div>
            <Button>
                Оплатить покупки!
            </Button>
        </div>
    )
}

export default OrderSummary;