import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/shared/ui/layout";

const Layout = () => {
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

export default Layout;
