import SearchBar from "../../search-bar";

const Filter = () => {
    return (
        <div className="w-[370px] bg-white border border-[#CBD5E1] rounded-md p-4">
            <h3 className="text-[24px] font-bold mb-4">Фильтры</h3>
            <div className="flex flex-col w-full space-y-8">
                <SearchBar
                placeholder="Найти в каталоге..."
                onSearch={(query) => {
                    // In a real app, you would handle the search here
                    console.log("Searching for:", query)
                }}/>
      </div>
        </div>
    )
}

export default Filter;
