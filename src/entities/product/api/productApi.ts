import { ProductsFilter } from './../model/types';
import { Product } from "../model/types";


const mockProducts: Product[] = [
    {
      id: "1",
      title: "Dyson Фен Supersonic HD07",
      description: "Профессиональный фен с технологией контроля температуры для защиты волос от повреждений",
      price: 39990,
      category: "beauty",
      image: "/dyson-card.svg",
      rating: { rate: 4.8, count: 120 },
    },
    {
      id: "2",
      title: "iPhone 15 Pro",
      description: "Смартфон с процессором A17 Pro, титановым корпусом и улучшенной камерой",
      price: 129990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.9, count: 350 },
    },
    {
      id: "3",
      title: "MacBook Pro 16",
      description: "Мощный ноутбук с процессором M3 Pro для профессиональной работы",
      price: 199990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.7, count: 230 },
    },
    {
      id: "4",
      title: "AirPods Pro 2",
      description: "Беспроводные наушники с активным шумоподавлением и адаптивным звуком",
      price: 29990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.6, count: 180 },
    },
    {
      id: "5",
      title: "Samsung Galaxy S24 Ultra",
      description: "Флагманский смартфон с продвинутой камерой и функциями искусственного интеллекта",
      price: 119990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.7, count: 210 },
    },
    {
      id: "6",
      title: "Dyson V15 Detect",
      description: "Беспроводной пылесос с лазерным обнаружением пыли и умной автоматической настройкой мощности",
      price: 59990,
      category: "home",
      image: "/dyson-card.svg",
      rating: { rate: 4.8, count: 150 },
    },
    {
      id: "7",
      title: "iPad Pro 12.9",
      description: "Планшет с дисплеем Liquid Retina XDR и процессором M2 для профессиональных задач",
      price: 149990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.8, count: 190 },
    },
    {
      id: "8",
      title: "Sony WH-1000XM5",
      description: "Беспроводные наушники с лучшим в индустрии шумоподавлением и высоким качеством звука",
      price: 34990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.9, count: 220 },
    },
    {
      id: "9",
      title: "Xiaomi Robot Vacuum S10+",
      description: "Робот-пылесос с функцией влажной уборки и автоматической очисткой контейнера",
      price: 29990,
      category: "home",
      image: "/dyson-card.svg",
      rating: { rate: 4.5, count: 130 },
    },
    {
      id: "10",
      title: "Canon EOS R5",
      description: "Профессиональная беззеркальная камера с 8K-видео и стабилизацией изображения",
      price: 349990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.8, count: 95 },
    },
    {
      id: "11",
      title: "Samsung QLED 4K TV",
      description: "Телевизор с квантовыми точками, ярким изображением и умными функциями",
      price: 89990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.7, count: 180 },
    },
    {
      id: "12",
      title: "Bose SoundLink Revolve+",
      description: "Портативная Bluetooth-колонка с объемным звуком 360° и водонепроницаемым корпусом",
      price: 24990,
      category: "electronics",
      image: "/dyson-card.svg",
      rating: { rate: 4.6, count: 140 },
    },
]

// Get all available categories from products
export const getCategories = (): string[] => {
    const categories = new Set<string>()
    mockProducts.forEach((product) => {
      categories.add(product.category)
    })
    return Array.from(categories)
  }
  
  // Get products with filtering and pagination
  export const getProducts = async (
    filter: ProductsFilter = {},
  ): Promise<{
    items: Product[]
    totalItems: number
    totalPages: number
  }> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
  
    let filteredProducts = [...mockProducts]
  
    // Apply category filter
    if (filter.category && filter.category !== "all") {
        filteredProducts = filteredProducts.filter((product) => product.category === filter.category)
    }
  
    // Apply price filter
    if (filter.priceMin !== undefined) {
      filteredProducts = filteredProducts.filter((product) => product.price >= filter.priceMin!)
    }
  
    if (filter.priceMax !== undefined) {
      filteredProducts = filteredProducts.filter((product) => product.price <= filter.priceMax!)
    }
  
    // Apply search filter if provided
    if (filter.search) {
      const searchLower = filter.search.toLowerCase()
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower),
      )
    }
  
    // Apply sorting
    if (filter.sort) {
      switch (filter.sort) {
        case "price-asc":
          filteredProducts.sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          filteredProducts.sort((a, b) => b.price - a.price)
          break
        case "rating":
          filteredProducts.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
          break
        default:
          // Default sorting (by id)
          break
      }
    }
  
    // Calculate pagination
    const page = filter.page || 1
    const limit = filter.limit || 6
    const totalItems = filteredProducts.length
    const totalPages = Math.ceil(totalItems / limit)
  
    // Apply pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)
  
    return {
      items: paginatedProducts,
      totalItems,
      totalPages,
    }
  }
  
  // Get a single product by ID
  export const getProductById = async (id: string): Promise<Product | null> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
  
    const product = mockProducts.find((p) => p.id === id)
    return product || null
  }
  