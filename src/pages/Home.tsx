import About from "@/shared/ui/home/About/About";
import Banner from "@/shared/ui/home/Banner/Banner";
import PopularProducts from "@/shared/ui/home/PopularProducts/PopularProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <PopularProducts />
      <About />
    </>
  );
}
