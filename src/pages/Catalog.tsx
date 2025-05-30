import { GridCards } from "@/shared/ui/sections/catalog";

const Catalog = () => {
  return (
    <div className="py-8 px-[52px] border-1 border-[#CBD5E1] rounded-md" >
        <h1 className="text-[48px] font-bold pb-4">Каталог</h1>
        <div className="flex justify-between">

            <GridCards/>
        </div>
    </div>
  );
}

export default Catalog;
