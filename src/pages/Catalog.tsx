import GridCards from "@/shared/ui/catalog/GridCards/GridCards";
import Filter from "@/shared/ui/catalog/Filter/Filter";

const Catalog = () => {
  return (
    <div className="py-8 px-[52px]" >
        <h1 className="text-[48px] font-bold pb-4">Каталог</h1>
        <div className="flex justify-between">
            <Filter />
            <GridCards />
        </div>
    </div>
  );
}

export default Catalog;
