import { Card } from "@/shared/ui/components/Card";

const PopularProducts = () => {
  return (
    <div className="bg-[#D9D9D9] rounded-[12px] px-[52px] py-8 mb-16">
      <h1 className="mb-7.5 font-bold">Популярные товары</h1>
      <div className="flex justify-between">
        <Card
          imageUrl={"/dyson-card.svg"}
          title="Dyson Фен"
          description="Фен для настоящих Crocodilo Bigudilo, изветсный на весь мир своим качеством делать настощий биггуди."
          productId="1"
        />
        <Card
          imageUrl={"/dyson-card.svg"}
          title="Dyson Фен"
          description="Фен для настоящих Crocodilo Bigudilo, изветсный на весь мир своим качеством делать настощий биггуди."
          productId="2"
        />
        <Card
          imageUrl={"/dyson-card.svg"}
          title="Dyson Фен"
          description="Фен для настоящих Crocodilo Bigudilo, изветсный на весь мир своим качеством делать настощий биггуди."
          productId="3"
        />
      </div>
    </div>
  );
};

export default PopularProducts;