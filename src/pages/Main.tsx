import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Main() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-[1440px] px-6 py-16">
        <MainContent/>
        {/* Здесь в будущем будет Grid товаров */}
      </main>
    </div>
  );
}