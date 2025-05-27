# 🛍️ SL & SHOP - Интернет-магазин электроники и бьюти-гаджетов

<div align="center">

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-cyan?logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-2.39-green?logo=supabase)

**Современный интернет-магазин с качественной архитектурой и развитым пользовательским интерфейсом**

</div>

---

## 📋 Содержание

- [🎯 О проекте](#-о-проекте)
- [✨ Функциональность](#-функциональность)
- [🏗️ Архитектура](#️-архитектура)
- [🔧 Технологии](#-технологии)
- [🎨 Паттерны проектирования](#-паттерны-проектирования)
- [🧪 Тестирование](#-тестирование)
- [🚀 Установка и запуск](#-установка-и-запуск)
- [📚 Документация](#-документация)
- [🤝 Вклад в проект](#-вклад-в-проект)

---

## 🎯 О проекте

**SL & SHOP** - это современный интернет-магазин, разработанный с использованием React, TypeScript и современных веб-технологий. Проект представляет собой полнофункциональное веб-приложение для продажи электроники и бьюти-гаджетов.

### 🎯 Цель проекта

Разработка программного продукта среднего уровня сложности с развитым пользовательским интерфейсом, применяя качественную архитектуру проекта – комплексную обработку исключений, поддержку расширяемости и использование современных методов проектирования.

---

## ✨ Функциональность

### 🌟 Основные возможности

| Функция | Описание |
|---------|----------|
| 🛒 **Каталог товаров** | Просмотр товаров с фильтрацией и поиском |
| 🛍️ **Корзина покупок** | Управление товарами с изменением количества |
| 💳 **Система оплаты** | Поддержка карт и СБП |
| 📞 **Обратная связь** | Контактная форма для связи |

### 👤 Пользовательские сценарии

<details>
<summary><strong>🔍 Просмотр и поиск товаров</strong></summary>

- Просмотр каталога товаров
- Фильтрация по категориям и цене
- Поиск по названию
- Сортировка результатов
- Детальный просмотр товара

</details>

<details>
<summary><strong>🛒 Управление корзиной</strong></summary>

- Добавление товаров в корзину
- Изменение количества товаров
- Удаление товаров
- Автоматический пересчет стоимости
- Сохранение состояния корзины

</details>

<details>
<summary><strong>💰 Оформление заказа</strong></summary>

- Заполнение контактной информации
- Выбор способа оплаты
- Валидация данных
- Обработка платежа
- Подтверждение заказа

</details>

---

## 🏗️ Архитектура

### 📐 Feature-Sliced Design (FSD)

Проект организован по методологии **Feature-Sliced Design**, которая обеспечивает:

- ⚡ **Масштабируемость** - легкое добавление новых функций
- 🔄 **Переиспользование** - компоненты используются в разных частях
- 🧪 **Тестируемость** - изолированные модули легко тестировать
- 📖 **Читаемость** - понятная структура проекта

### 📁 Структура проекта

```
src/
├── 🏗️ app/                    # Конфигурация приложения
│   ├── App.tsx                # Корневой компонент
│   └── router.tsx             # Маршрутизация
├── 📄 pages/                  # Страницы приложения
│   ├── Home.tsx               # Главная страница
│   ├── Catalog.tsx            # Каталог товаров
│   ├── Cart.tsx               # Корзина
│   ├── Payment.tsx            # Оплата
│   ├── ProductDetails.tsx     # Детали товара
│   ├── About.tsx              # О компании
│   ├── Contacts.tsx           # Контакты
│   └── NotFound.tsx           # 404 страница
├── ⚡ features/               # Бизнес-функции
│   ├── cart/                  # Функции корзины
│   ├── filter/                # Фильтрация товаров
│   ├── pagination/            # Пагинация
│   └── payment/               # Функции оплаты
├── 🏢 entities/               # Бизнес-сущности
│   ├── product/               # Сущность "Товар"
│   ├── cart/                  # Сущность "Корзина"
│   ├── category/              # Сущность "Категория"
│   └── payment/               # Сущность "Платеж"
└── 🔧 shared/                 # Переиспользуемые ресурсы
    ├── ui/                    # UI компоненты
    ├── lib/                   # Библиотеки
    ├── api/                   # API функции
    └── utils/                 # Утилиты
```

### 🎯 Принципы архитектуры

| Принцип | Описание |
|---------|----------|
| **🔒 Изоляция** | Каждый слой изолирован от вышестоящих |
| **♻️ Переиспользование** | Общий код в shared слое |
| **🧩 Модульность** | Каждый модуль отвечает за свою функцию |
| **📈 Масштабируемость** | Легкое добавление новых фич |

---

## 🔧 Технологии

### 🎨 Frontend

| Технология | Версия | Назначение |
|------------|--------|------------|
| **React** | 18.3.1 | Библиотека для UI |
| **TypeScript** | 5.6.2 | Типизированный JavaScript |
| **Vite** | 5.4.10 | Инструмент сборки |
| **Tailwind CSS** | 4.0.0-alpha | CSS фреймворк |
| **React Router** | 6.28.0 | Маршрутизация |
| **Lucide React** | 0.460.0 | Иконки |

### 🗄️ Backend/Database

| Технология | Назначение |
|------------|------------|
| **Supabase** | Backend-as-a-Service |
| **PostgreSQL** | Реляционная БД |

### 🧪 Разработка и тестирование

| Инструмент | На��начение |
|------------|------------|
| **Vitest** | Фреймворк тестирования |
| **Testing Library** | Тестирование React |
| **ESLint** | Линтинг кода |

---

## 🎨 Паттерны проектирования

### 1. 🎯 Strategy Pattern (Стратегия)

Используется для реализации различных методов оплаты:

<details>
<summary><strong>Посмотреть код</strong></summary>

```typescript
// Интерфейс стратегии
interface PaymentStrategy {
  name: string
  displayName: string
  process(data: PaymentData): Promise<PaymentResult>
}

// Конкретные стратегии
class CardPaymentStrategy implements PaymentStrategy {
  name = 'card'
  displayName = 'Банковская карта'
  
  async process(data: PaymentData): Promise<PaymentResult> {
    // Логика оплаты картой
  }
}

class SBPPaymentStrategy implements PaymentStrategy {
  name = 'sbp'
  displayName = 'Система быстрых платежей'
  
  async process(data: PaymentData): Promise<PaymentResult> {
    // Логика оплаты через СБП
  }
}

// Контекст
class PaymentProcessor {
  private strategies = new Map<string, PaymentStrategy>()
  
  processPayment(method: string, data: PaymentData) {
    const strategy = this.strategies.get(method)
    return strategy?.process(data)
  }
}
```

</details>

### 2. 👁️ Observer Pattern (Наблюдатель)

Реализован в системе управления корзиной:

<details>
<summary><strong>Посмотреть код</strong></summary>

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

</details>

### 3. 🏭 Factory Pattern (Фабрика)

Используется для создания компонентов:

<details>
<summary><strong>Посмотреть код</strong></summary>

```typescript
// Фабрика для создания карточек товаров
const createProductCard = (variant: 'default' | 'compact', product: Product) => {
  return <Card variant={variant} {...product} />
}
```

</details>

### 4. 🔒 Singleton Pattern (Одиночка)

Реализован в конфигурации Supabase:

<details>
<summary><strong>Посмотреть код</strong></summary>

```typescript
// Единственный экземпляр клиента БД
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

</details>

---

## 🧪 Тестирование

### 📊 Покрытие тестами

- ✅ **Утилиты для работы с количеством товаров**
- ✅ **Функции валидации форм**
- ✅ **Функции расчета стоимости корзины**
- ✅ **Стратегии оплаты**

### 🔬 Пример тестов

<details>
<summary><strong>Тесты утилит количества</strong></summary>

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

</details>

### 🚀 Запуск тестов

```bash
# Запуск всех тестов
npm run test

# Запуск с UI
npm run test:ui

# Покрытие кода
npm run test:coverage
```

---

## 🚀 Установка и запуск

### 📋 Предварительные требования

- **Node.js** 18+ 
- **npm** или **yarn**

### ⚙️ Установка

1. **📥 Клонирование репозитория:**
   ```bash
   git clone <repository-url>
   cd sl-shop
   ```

2. **📦 Установка зависимостей:**
   ```bash
   npm install
   ```

3. **🔧 Настройка переменных окружения:**
   
   Создайте файл `.env.local`:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **🚀 Запуск в режиме разработки:**
   ```bash
   npm run dev
   ```

### 📜 Доступные скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | 🔥 Запуск в режиме разработки |
| `npm run build` | 📦 Сборка для продакшена |
| `npm run preview` | 👀 Предпросмотр сборки |
| `npm run lint` | 🔍 Проверка кода линтером |
| `npm run test` | 🧪 Запуск тестов |

---

## 📚 Документация

<details>
<summary><h3>🗄️ Структура базы данных</h3></summary>

### Таблицы

#### 📦 products - товары
- `id` (UUID, PK)
- `title` (VARCHAR)
- `description` (TEXT)
- `price` (DECIMAL)
- `category_id` (UUID, FK)
- `image_url` (VARCHAR)
- `rating_rate` (DECIMAL)
- `rating_count` (INTEGER)
- `in_stock` (BOOLEAN)

#### 📂 categories - категории товаров
- `id` (UUID, PK)
- `name` (VARCHAR)
- `display_name` (VARCHAR)
- `description` (TEXT)

#### 📋 orders - заказы
- `id` (UUID, PK)
- `order_number` (VARCHAR)
- `customer_name` (VARCHAR)
- `customer_email` (VARCHAR)
- `customer_phone` (VARCHAR)
- `total_amount` (DECIMAL)
- `payment_method` (VARCHAR)
- `payment_status` (VARCHAR)
- `transaction_id` (VARCHAR)

#### 📝 order_items - позиции заказов
- `id` (UUID, PK)
- `order_id` (UUID, FK)
- `product_id` (UUID, FK)
- `quantity` (INTEGER)
- `price` (DECIMAL)

#### 💬 contact_messages - сообщения обратной связи
- `id` (UUID, PK)
- `first_name` (VARCHAR)
- `last_name` (VARCHAR)
- `email` (VARCHAR)
- `phone` (VARCHAR)
- `message` (TEXT)
- `status` (VARCHAR)

</details>

<details>
<summary><h3>🔧 API функции</h3></summary>

### Товары (`src/entities/product/api/productApi.ts`)
- `getProducts(filter)` - получение списка товаров с фильтрацией
- `getProductById(id)` - получение товара по ID
- `getCategories()` - получение списка категорий

### Заказы (`src/shared/api/orders.ts`)
- `createOrder(orderData)` - создание нового заказа

### Контакты (`src/shared/api/contacts.ts`)
- `createContactMessage(messageData)` - отправка сообщения

</details>

<details>
<summary><h3>🎯 Принципы ООП и SOLID</h3></summary>

### Принципы ООП

1. **🔒 Инкапсуляция** - данные и методы объединены в классах и хуках
2. **🎭 Абстракция** - использование интерфейсов для определения контрактов
3. **🔄 Полиморфизм** - различные стратегии оплаты реализуют один интерфейс
4. **👨‍👩‍👧‍👦 Наследование** - компоненты наследуют базовую функциональность

### Принципы SOLID

1. **S** - Single Responsibility - каждый модуль отвечает за одну функцию
2. **O** - Open/Closed - система открыта для расширения
3. **L** - Liskov Substitution - стратегии оплаты взаимозаменяемы
4. **I** - Interface Segregation - интерфейсы разделены по назначению
5. **D** - Dependency Inversion - зависимость от абстракций

</details>

<details>
<summary><h3>🛡️ Обработка исключений</h3></summary>

Система включает комплексную обработку ошибок:

```typescript
// Обработка ошибок в API
try {
  const { data, error } = await supabase.from('products').select('*')
  if (error) throw new Error(`Ошибка загрузки: \${error.message}`)
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

</details>

---

## 🤝 Вклад в проект

1. 🍴 Форкните репозиторий
2. 🌿 Создайте ветку для ваших изменений (`git checkout -b feature/amazing-feature`)
3. 💾 Зафиксируйте ваши изменения (`git commit -m 'Add some amazing feature'`)
4. 📤 Отправьте изменения в ваш форк (`git push origin feature/amazing-feature`)
5. 🔄 Откройте Pull Request

---

## 📈 Результаты и достижения

### ✅ Реализованные сценарии

- 🛒 **Успешная покупка** - полный цикл от просмотра до оплаты
- ❌ **Обработка ошибок** - корректная обработка неуспешных операций
- 🔄 **Управление корзиной** - добавление, изменение, удаление товаров
- 🔍 **Фильтрация и поиск** - удобный поиск и фильтрация товаров

### 🚀 Расширяемость системы

Архитектура позволяет легко добавлять:

- 💳 **Новые способы оплаты** - через реализацию `PaymentStrategy`
- 📦 **Новые типы товаров** - через расширение модели `Product`
- 📄 **Новые страницы** - через добавление роутов
- 🔍 **Новые фильтры** - через расширение `ProductsFilter`
- 🔔 **Новые уведомления** - через систему Observer

---

## 👨‍💻 Автор

- Григорий Буренков - [GitHub](https://github.com/skv0r)

```
