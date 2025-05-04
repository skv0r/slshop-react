import { Outlet } from "react-router-dom";
import Header from "@/shared/ui/header/Header";
import Footer from "@/shared/ui/footer/Footer";

export default function Layout() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-[1440px] py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
