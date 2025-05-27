"use client"

import { Slider } from "@/shared/ui/components"
import { useState, useEffect } from "react"

interface PriceRangeFilterProps {
  minPrice: number
  maxPrice: number
  currentMin: number
  currentMax: number
  onChange: (values: [number, number]) => void
}

export const PriceRangeFilter = ({ minPrice, maxPrice, currentMin, currentMax, onChange }: PriceRangeFilterProps) => {
  const [localValues, setLocalValues] = useState<[number, number]>([currentMin, currentMax])

  // Update local state when props change
  useEffect(() => {
    setLocalValues([currentMin, currentMax])
  }, [currentMin, currentMax])

  const handleChange = (values: number[]) => {
    const newValues: [number, number] = [values[0], values[1]]
    setLocalValues(newValues)
  }

  const handleChangeCommitted = () => {
    onChange(localValues)
  }

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-3">Ценовой диапазон</h3>
      <Slider
        min={minPrice}
        max={maxPrice}
        step={100}
        value={localValues}
        onValueChange={handleChange}
        onValueCommit={handleChangeCommitted}
        className="my-6"
      />
      <div className="flex items-center justify-between">
        <span className="text-sm">{localValues[0].toLocaleString()} ₽</span>
        <span className="text-sm">{localValues[1].toLocaleString()} ₽</span>
      </div>
    </div>
  )
}
