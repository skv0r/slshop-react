import { Button, OrderSummary, ProductList } from "@/shared/ui";
import { Link } from "react-router-dom"


const Cart = () => {
    return (
        <div className="py-8 px-[52px] border-1 border-[#CBD5E1] rounded-md" >
        <h1 className="text-[48px] font-bold pb-4">Корзина</h1>
        <div className="flex justify-between">
            <ProductList/>
            <OrderSummary/>
        </div>
        <Link to={"/catalog"}>
            <Button>Продолжить покупки</Button>
        </Link>
    </div>
    )
}

export default Cart;