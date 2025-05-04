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
    price: "39 990₽",
  },
  {
    imageUrl: "dyson-card.svg",
    title: "iPhone 15 Pro",
    price: "129 990₽",
  },
  {
    imageUrl: "dyson-card.svg",
    title: "MacBook Pro",
    price: "199 990₽",
  },
  {
    imageUrl: "dyson-card.svg",
    title: "AirPods Pro",
    price: "29 990₽",
  },
  {
    imageUrl: "dyson-card.svg",
    title: "AirPods Pro",
    price: "29 990₽",
  },
  {
    imageUrl: "dyson-card.svg",
    title: "AirPods Pro",
    price: "29 990₽",
  },
];

const GridCards = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="max-w-[920px] grid grid-cols-3 gap-[25px]">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            price={card.price}
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
