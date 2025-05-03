import About from "@/shared/ui/main/About";
import Banner from "@/shared/ui/main/Banner";
import PopularProducts from "@/shared/ui/main/PopularProducts";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <main className="mx-auto max-w-[1440px] py-16">
        <Banner />
        <PopularProducts />
        <About />
      </main>
    </div>
  );
}
