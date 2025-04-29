import { Card } from "./card";

const PopularProducts = () => {
    return (
        <div className="bg-[#D9D9D9] rounded-[12px] px-[52px] py-8">
            <h1 className="mb-7.5 font-bold">Популярные товары</h1>
            <div className="flex justify-between">
                <Card imageUrl={"/dyson-card.svg"}/>
                <Card imageUrl={"/dyson-card.svg"}/>
                <Card imageUrl={"/dyson-card.svg"}/>
            </div>
        </div>
    )
}

export default PopularProducts;