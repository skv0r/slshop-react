import { useEffect, useState } from "react";
import Category from "./types";
import fetchCategories from "../api/categoryApi";

const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        const loadCategories = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const data = await fetchCategories()
                setCategories(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Ошибка в fetch categories")
            } finally {
                setIsLoading(false)
            }
        }

        loadCategories()
    }, [])
    return { categories, isLoading, error}
}

export default useCategories;