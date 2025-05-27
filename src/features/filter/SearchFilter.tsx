import { SearchBar } from "@/shared/ui/components"

interface SearchFilterProps {
  value: string
  onChange: (value: string) => void
}

export const SearchFilter = ({ value, onChange }: SearchFilterProps) => {
  return (
    <div className="mb-6">
      <SearchBar placeholder="Найти в каталоге..." value={value} onSearch={onChange} className="w-full" />
    </div>
  )
}
