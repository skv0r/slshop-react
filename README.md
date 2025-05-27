# SL & SHOP - Интернет-магазин электроники и бьюти-гаджетов

## Описание проекта

SL & SHOP - это современный интернет-магазин, разработанный с использованием React, TypeScript и современных веб-технологий. Проект представляет собой полнофункциональное веб-приложение для продажи электроники и бьюти-гаджетов с развитым пользовательским интерфейсом и качественной архитектурой.

## Цель проекта

Разработка программного продукта среднего уровня сложности с развитым пользовательским интерфейсом, применяя качественную архитектуру проекта – комплексную обработку исключений, поддержку расширяемости и использование современных методов проектирования.

## Функциональность

### Основные возможности:
- **Каталог товаров** с фильтрацией и поиском
- **Корзина покупок** с возможностью изменения количества товаров
- **Система оплаты** с поддержкой различных методов (карта, СБП)
- **Детальные страницы товаров** с описанием и характеристиками
- **Адаптивный дизайн** для всех устройств
- **Обратная связь** через контактную форму

### Пользовательские сценарии:
1. **Просмотр каталога** - пользователь может просматривать товары, фильтровать по категориям и цене
2. **Добавление в корзину** - товары можно добавлять в корзину с выбором количества
3. **Оформление заказа** - полный цикл оплаты с валидацией данных
4. **Управление корзиной** - изменение количества, удаление товаров
5. **Обратная связь** - отправка сообщений через контактную форму

## Архитектура проекта

### Архитектурный паттерн: Feature-Sliced Design (FSD)

Проект организован по методологии Feature-Sliced Design, которая обеспечивает:
- **Масштабируемость** - легкое добавление новых функций
- **Переиспользование** - компоненты можно использовать в разных частях приложения
- **Тестируемость** - изолированные модули легко тестировать
- **Читаемость** - понятная структура проекта

```
shared/
├── ui/                     # UI компоненты
│   ├── components/         # Базовые компоненты
│   │   ├── button/
│   │   ├── input/
│   │   ├── Card/
│   │   ├── navigation-menu/
│   │   ├── pagination/
│   │   ├── search-bar/
│   │   ├── slider/
│   │   ├── checkbox/
│   │   └── label/
│   ├── layout/             # Компоненты макета
│   │   ├── header/
│   │   ├── footer/
│   │   └── Layout.tsx
│   └── sections/           # Секции страниц
│       ├── home/
│       ├── catalog/
│       ├── about/
│       ├── contact/
│       ├── cart/
│       └── product/
├── lib/                    # Библиотеки и конфигурации
│   ├── supabase.ts
│   └── utils.ts
├── api/                    # API функции
│   ├── orders.ts
│   └── contacts.ts
└── utils/                  # Утилиты
    ├── index.ts
    ├── formatDate.ts
    └── quantity.ts
```

## Паттерны проектирования

### 1. Strategy Pattern (Стратегия)
Используется для реализации различных методов оплаты:

```typescript
// Интерфейс стратегии
interface PaymentStrategy {
  name: string
  displayName: string
  process(data: PaymentData): Promise<PaymentResult>
}

// Конкретные стратегии
class CardPaymentStrategy implements PaymentStrategy {
  // Реализация оплаты картой
}

class SBPPaymentStrategy implements PaymentStrategy {
  // Реализация оплаты через СБП
}

// Контекст
class PaymentProcessor {
  private strategies: Map<string, PaymentStrategy>
  
  processPayment(method: string, data: PaymentData) {
    const strategy = this.getStrategy(method)
    return strategy.process(data)
  }
}
```

### 2. Observer Pattern (Наблюдатель)
Реализован в системе управления корзиной для уведомления компонентов об изменениях:

```typescript
// Глобальное состояние корзины
let globalCart: Cart = { items: [], totalItems: 0, totalPrice: 0 }

// Список наблюдателей
const listeners: Set<() => void> = new Set()

// Уведомление наблюдателей
const notifyListeners = () => {
  listeners.forEach(listener => listener())
}

// Подписка на изменения
useEffect(() => {
  const updateCart = () => setCart(globalCart)
  listeners.add(updateCart)
  return () => listeners.delete(updateCart)
}, [])
```

### 3. Factory Pattern (Фабрика)
Используется для создания различных типов уведомлений и компонентов:

```typescript
// Фабрика для создания различных типов карточек товаров
const createProductCard = (variant: 'default' | 'compact', product: Product) => {
  return <Card variant={variant} {...product} />
}
```

### 4. Singleton Pattern (Одиночка)
Реализован в конфигурации Supabase клиента:

```typescript
// Единственный экземпляр клиента базы данных
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## Принципы ООП и SOLID

### Принципы ООП:

1. **Инкапсуляция** - данные и методы объединены в классах и хуках:
```typescript
const useCart = () => {
  const [cart, setCart] = useState<Cart>(globalCart)
  // Приватные методы для работы с корзиной
  const addToCart = useCallback(...)
  const removeFromCart = useCallback(...)
  // Публичный интерфейс
  return { cart, addToCart, removeFromCart }
}
```

2. **Абстракция** - использование интерфейсов для определения контрактов:
```typescript
interface PaymentStrategy {
  process(data: PaymentData): Promise<PaymentResult>
}

interface Product {
  id: string
  title: string
  price: number
  // ...
}
```

3. **Полиморфизм** - различные стратегии оплаты реализуют один интерфейс:
```typescript
const strategies = [
  new CardPaymentStrategy(),
  new SBPPaymentStrategy()
]
// Все стратегии вызываются одинаково
strategy.process(paymentData)
```

4. **Наследование** - компоненты наследуют базовую функциональность:
```typescript
// Базовый компонент кнопки
const Button = ({ variant, size, ...props }) => { ... }

// Специализированные кнопки наследуют базовую функциональность
const PaymentButton = (props) => <Button variant="primary" {...props} />
```

### Принципы SOLID:

1. **Single Responsibility** - каждый модуль отвечает за одну функцию
2. **Open/Closed** - система открыта для расширения (новые стратегии оплаты)
3. **Liskov Substitution** - стратегии оплаты взаимозаменяемы
4. **Interface Segregation** - интерфейсы разделены по назначению
5. **Dependency Inversion** - зависимость от абстракций, а не от конкретных реализаций

## Технологический стек

### Frontend:
- **React 18** - библиотека для создания пользовательских интерфейсов
- **TypeScript** - типизированный JavaScript для повышения надежности кода
- **Vite** - современный инструмент сборки
- **Tailwind CSS** - utility-first CSS фреймворк
- **React Router** - маршрутизация в SPA
- **Lucide React** - иконки

### Backend/Database:
- **Supabase** - Backend-as-a-Service платформа
- **PostgreSQL** - реляционная база данных (через Supabase)

### Архитектура и паттерны:
- **Feature-Sliced Design** - архитектурная методология
- **Custom Hooks** - для управления состоянием
- **Component Composition** - композиция компонентов

## Структура базы данных

### Таблицы:

1. **products** - товары
   - id (UUID, PK)
   - title (VARCHAR)
   - description (TEXT)
   - price (DECIMAL)
   - category_id (UUID, FK)
   - image_url (VARCHAR)
   - rating_rate (DECIMAL)
   - rating_count (INTEGER)
   - in_stock (BOOLEAN)

2. **categories** - категории товаров
   - id (UUID, PK)
   - name (VARCHAR)
   - display_name (VARCHAR)
   - description (TEXT)

3. **orders** - заказы
   - id (UUID, PK)
   - order_number (VARCHAR)
   - customer_name (VARCHAR)
   - customer_email (VARCHAR)
   - customer_phone (VARCHAR)
   - total_amount (DECIMAL)
   - payment_method (VARCHAR)
   - payment_status (VARCHAR)
   - transaction_id (VARCHAR)

4. **order_items** - позиции заказов
   - id (UUID, PK)
   - order_id (UUID, FK)
   - product_id (UUID, FK)
   - quantity (INTEGER)
   - price (DECIMAL)

5. **contact_messages** - сообщения обратной связи
   - id (UUID, PK)
   - first_name (VARCHAR)
   - last_name (VARCHAR)
   - email (VARCHAR)
   - phone (VARCHAR)
   - message (TEXT)
   - status (VARCHAR)

## Обработка исключений

Система включает комплексную обработку ошибок:

```typescript
// Обработка ошибок в API
try {
  const { data, error } = await supabase.from('products').select('*')
  if (error) throw new Error(`Ошибка загрузки: ${error.message}`)
  return data
} catch (error) {
  console.error('Ошибка:', error)
  throw error
}

// Обработка ошибок в компонентах
const [error, setError] = useState<string | null>(null)

const handleAction = async () => {
  try {
    setError(null)
    await someAsyncAction()
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Неизвестная ошибка')
  }
}
```

## Модульное тестирование

### Тестируемые функции:

1. **Утилиты для работы с количеством товаров** (`src/shared/utils/quantity.ts`)
2. **Функции валидации форм**
3. **Функции расчета стоимости корзины**

### Пример тестов:

```typescript
// tests/utils/quantity.test.ts
import { validateQuantity, incrementQuantity, canDecrement } from '@/shared/utils/quantity'

describe('Quantity Utils', () => {
  test('validateQuantity should return correct value within bounds', () => {
    expect(validateQuantity(5, 1, 10)).toBe(5)
    expect(validateQuantity(0, 1, 10)).toBe(1)
    expect(validateQuantity(15, 1, 10)).toBe(10)
  })

  test('incrementQuantity should respect max limit', () => {
    expect(incrementQuantity(5, 10)).toBe(6)
    expect(incrementQuantity(10, 10)).toBe(10)
  })

  test('canDecrement should check minimum bounds', () => {
    expect(canDecrement(5, 1)).toBe(true)
    expect(canDecrement(1, 1)).toBe(false)
  })
})
```

## Установка и запуск

### Предварительные требования:
- Node.js 18+
- npm или yarn

### Установка:

1. **Клонирование репозитория:**
```bash
git clone <repository-url>
cd sl-shop
```

2. **Установка зависимостей:**
```bash
npm install
```

3. **Настройка переменных окружения:**
Создайте файл `.env.local` в корне проекта:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Запуск в режиме разработки:**
```bash
npm run dev
```

5. **Сборка для продакшена:**
```bash
npm run build
```

6. **Запуск тестов:**
```bash
npm run test
```

### Доступные скрипты:
- `npm run dev` - запуск в режиме разработки
- `npm run build` - сборка для продакшена
- `npm run preview` - предварительный просмотр сборки
- `npm run lint` - проверка кода линтером
- `npm run test` - запуск тестов

## Пользовательская документация

### Навигация по сайту:

1. **Главная страница** - обзор популярных товаров и информация о компании
2. **Каталог** - просмотр всех товаров с возможностью фильтрации
3. **Страница товара** - детальная информация о товаре
4. **Корзина** - управление выбранными товарами
5. **Оплата** - оформление заказа
6. **О нас** - информация о компании
7. **Контакты** - контактная информация и форма обратной связи

### Работа с каталогом:

1. **Фильтрация товаров:**
   - По категориям (выбор из списка)
   - По цене (ползунок диапазона)
   - По поиску (текстовое поле)
   - По сортировке (цена, рейтинг)

2. **Добавление в корзину:**
   - Нажмите "Перейти к товару" на карточке
   - На странице товара выберите количество
   - Нажмите "Добавить в корзину"

### Оформление заказа:

1. **Переход к оплате:**
   - В корзине нажмите "Оплатить покупки!"
   - Заполните контактную информацию
   - Выберите способ оплаты
   - Подтвердите заказ

2. **Способы оплаты:**
   - Банковская карта
   - Система быстрых платежей (СБП)

## Техническая документация

### Основные компоненты:

#### `useCart` - хук для управления корзиной
```typescript
const useCart = () => {
  // Возвращает состояние корзины и методы для работы с ней
  return {
    cart: Cart,           // Текущее состояние корзины
    addToCart: Function,  // Добавление товара
    updateQuantity: Function, // Изменение количества
    removeFromCart: Function, // Удаление товара
    clearCart: Function,  // Очистка корзины
    isLoading: boolean,   // Состояние загрузки
    error: string | null  // Ошибки
  }
}
```

#### `useProducts` - хук для работы с товарами
```typescript
const useProducts = (filter: ProductsFilter) => {
  // Возвращает товары с учетом фильтрации и пагинации
  return {
    items: Product[],     // Список товаров
    isLoading: boolean,   // Состояние загрузки
    error: string | null, // Ошибки
    totalPages: number,   // Общее количество страниц
    currentPage: number,  // Текущая страница
    setPage: Function,    // Изменение страницы
    setCategory: Function, // Фильтр по категории
    setSort: Function,    // Сортировка
    // ... другие методы фильтрации
  }
}
```

#### `PaymentProcessor` - класс для обработки платежей
```typescript
class PaymentProcessor {
  private strategies: Map<string, PaymentStrategy>
  
  // Обработка платежа выбранным методом
  async processPayment(method: string, data: PaymentData): Promise<PaymentResult>
  
  // Получение доступных методов оплаты
  getAvailableMethods(): PaymentStrategy[]
}
```

### API функции:

#### Товары (`src/entities/product/api/productApi.ts`)
- `getProducts(filter)` - получение списка товаров с фильтрацией
- `getProductById(id)` - получение товара по ID
- `getCategories()` - получение списка категорий

#### Заказы (`src/shared/api/orders.ts`)
- `createOrder(orderData)` - создание нового заказа

#### Контакты (`src/shared/api/contacts.ts`)
- `createContactMessage(messageData)` - отправка сообщения обратной связи

## Результаты работы

### Реализованные сценарии:

1. **Успешная покупка:**
   - Пользователь просматривает каталог
   - Добавляет товары в корзину
   - Оформляет заказ с валидными данными
   - Получает подтверждение об успешной оплате

2. **Неуспешная оплата:**
   - Пользователь пытается оплатить заказ
   - Система имитирует ошибку оплаты
   - Пользователь получает сообщение об ошибке
   - Возможность повторить попытку

3. **Управление корзиной:**
   - Добавление товаров разных категорий
   - Изменение количества товаров
   - Удаление товаров из корзины
   - Автоматический пересчет стоимости

4. **Фильтрация и поиск:**
   - Поиск товаров по названию
   - Фильтрация по категориям
   - Фильтрация по цене
   - Сортировка результатов

## Расширяемость системы

Архитектура проекта позволяет легко добавлять:

1. **Новые способы оплаты** - через реализацию интерфейса `PaymentStrategy`
2. **Новые типы товаров** - через расширение модели `Product`
3. **Новые страницы** - через добавление роутов в `router.tsx`
4. **Новые фильтры** - через расширение интерфейса `ProductsFilter`
5. **Новые уведомления** - через систему Observer в корзине

## Заключение

Проект SL & SHOP демонстрирует применение современных подходов к разработке веб-приложений:

- **Качественная архитектура** с использованием Feature-Sliced Design
- **Применение паттернов проектирования** для решения типовых задач
- **Соблюдение принципов SOLID** для создания поддерживаемого кода
- **Комплексная обработка ошибок** для повышения надежности
- **Модульное тестирование** для обеспечения качества кода
- **Современный технологический стек** для эффективной разработки

Система готова к развертыванию и дальнейшему развитию, обеспечивая хорошую основу для масштабирования и добавления новой функциональности.
