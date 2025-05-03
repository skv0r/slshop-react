import { Outlet } from "react-router-dom";
import Header from "@/shared/ui/header/Header";
import Footer from "@/shared/ui/footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
