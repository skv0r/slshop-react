import { useCallback, useState, useEffect } from "react";
import { ProductsFilter, ProductsState } from "./types";
import { getProducts } from "../api/productApi";

const useProducts = ( initialFilter: ProductsFilter = {} ) => {
    const [state, setState] = useState<ProductsState>({
        items: [],
        isLoading: false,
        error: null,
        totalItems: 0,
        totalPages: 0,
        currentPage: initialFilter.page || 1,
    })

    const [filter, setFilter] = useState<ProductsFilter>(initialFilter)

    const fetchProducts = useCallback( async () => {
        setState( (prev) => ({...prev, isLoading: true, error: null}))

        try {
            const { items, totalItems, totalPages } = await getProducts(filter)
            setState({
              items,
              isLoading: false,
              error: null,
              totalItems,
              totalPages,
              currentPage: filter.page || 1,
            })
          } catch (error) {
            setState((prev) => ({
              ...prev,
              isLoading: false,
              error: error instanceof Error ? error.message : "Failed to fetch products",
            }))
          }
    }, [filter])


    useEffect(() => {
        fetchProducts()
      }, [fetchProducts])
    
      const updateFilter = useCallback((newFilter: Partial<ProductsFilter>) => {
        // If changing anything other than page, reset to page 1
        if (Object.keys(newFilter).some((key) => key !== "page")) {
          setFilter((prev) => ({ ...prev, ...newFilter, page: 1 }))
        } else {
          setFilter((prev) => ({ ...prev, ...newFilter }))
        }
      }, [])
    
      const setPage = useCallback(
        (page: number) => {
          updateFilter({ page })
        },
        [updateFilter],
      )
    
      const setPriceRange = useCallback(
        (priceRange: [number, number]) => {
          updateFilter({ priceMin: priceRange[0], priceMax: priceRange[1] })
        },
        [updateFilter],
      )
    
      const setCategory = useCallback(
        (category: string) => {
          updateFilter({ category })
        },
        [updateFilter],
      )
    
      const setSort = useCallback(
        (sort: ProductsFilter["sort"]) => {
          updateFilter({ sort })
        },
        [updateFilter],
      )
    
      const setSearch = useCallback(
        (search: string) => {
          updateFilter({ search: search || undefined })
        },
        [updateFilter],
      )
    
      const resetFilters = useCallback(() => {
        setFilter({
          page: 1,
          limit: filter.limit,
        })
      }, [filter.limit])
    
      return {
        ...state,
        filter,
        setPage,
        setPriceRange,
        setCategory,
        setSort,
        setSearch,
        resetFilters,
        refetch: fetchProducts,
      }
}

export default useProducts;