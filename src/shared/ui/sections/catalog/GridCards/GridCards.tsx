import useCategories from "@/entities/category/model/useCategories";
import useProducts from "@/entities/product/model/useProducts";
import { CatalogPagination } from "@/features/catalog/pagination";
import { Card } from "@/shared/ui/components";

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

const GridCards = ( /*Здесь мы уберем данные в отдельный файл*/
  {priceRange}: GridCardsProps
) => {

  const filteredCardsData = cardsData.filter(card =>
    card.price >= priceRange[0] && card.price <= priceRange[1]
  )
  /*Здесь мы уберем данные в отдельный файл, когда будем получать данные из бд*/
  const { categories, isLoading: categoriesLoading } = useCategories()

  const {
    items: products,
    isLoading: productsLoading,
    totalPages,
    currentPage,
    filter,
    setPage,
    setPriceRange,
    setCategory,
    setSort,
    setSearch,
    resetFilters,
  } = useProducts({
    limit: 6,
    page: 1,
  })

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

      <CatalogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage}/>
    </div>
  );
};

export default GridCards;
