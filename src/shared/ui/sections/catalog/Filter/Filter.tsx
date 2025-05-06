import { SearchBar,  Button } from "@/shared/ui/components";
import { X } from "lucide-react";
import PriceRangeFilter from "./PriceFilter";
import { useState } from "react";



const Filter = () => {

    const [priceRange, setPriceRange] = useState<number[]>([0, 300]);

    return (

        <div className="w-[370px] bg-white border border-[#CBD5E1] rounded-md p-4">
            <h3 className="mb-4 text-[24px] font-bold">Фильтры</h3>
            <div className="flex flex-col w-full gap-4">
                <SearchBar
                placeholder="Найти в каталоге..."
                onSearch={(query) => {
                    // In a real app, you would handle the search here
                    console.log("Searching for:", query)
                }}/>

                <PriceRangeFilter
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                />

                <Button variant="ghost" size="sm" className="w-45">
                    Очистить фильтры
                    <X/>
                </Button>
            </div>

        </div>
    )
}

export default Filter;
