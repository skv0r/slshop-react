import Header from "@/components/Header";

export default function Main() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-[1440px] px-6 py-8">
        <h1 className="text-3xl font-bold mb-4">Добро пожаловать в магазин SLShop</h1>
        <p className="text-gray-600">Начни покупать лучшие смартфоны прямо сейчас.</p>
        {/* Здесь в будущем будет Grid товаров */}
      </main>
    </div>
  );
}