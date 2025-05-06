import { Card } from "@/shared/ui/components";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/components";

const cardsData = [
  {
    imageUrl: "dyson-card.svg",
    title: "Dyson Фен",
    price: 39990,
  },
  {
    imageUrl: "dyson-card.svg",
    title: "iPhone 15 Pro",
    price: 129990,
  },
  {
    imageUrl: "dyson-card.svg",
    title: "MacBook Pro",
    price: 199990,
  },
  {
    imageUrl: "dyson-card.svg",
    title: "AirPods Pro",
    price: 29990,
  },
  {
    imageUrl: "dyson-card.svg",
    title: "AirPods Pro",
    price: 29900,
  },
  {
    imageUrl: "dyson-card.svg",
    title: "AirPods Pro",
    price: 29900,
  },
];

interface GridCardsProps {
  priceRange: number[];
}

const GridCards = (
  {priceRange}: GridCardsProps
) => {

  const filteredCardsData = cardsData.filter(card =>
    card.price >= priceRange[0] && card.price <= priceRange[1]
  )

  return (
    <div className="flex flex-col gap-8">
      <div className="max-w-[920px] grid grid-cols-3 gap-[25px]">
        {filteredCardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            price={card.price + "₽"}
            variant="compact"
          />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default GridCards;
