"use client"

import { Slider } from "@/shared/ui/components"


interface PriceRangeFilterProps {
  priceRange: number[]
  setPriceRange: (value: number[]) => void
  min?: number
  max?: number
}

const PriceRangeFilter = ({ 
    priceRange,
    setPriceRange,
    min = 0,
    max = 300 
}: PriceRangeFilterProps) => {
  return (
        <div>
            <Slider
            defaultValue={[min, max]}
            max={max}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-6"
            />
            <div className="flex items-center justify-between">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}</span>
            </div>
        </div>
  )
}

export default PriceRangeFilter;