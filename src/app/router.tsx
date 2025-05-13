import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "@/pages/Catalog";
import Layout from "@/shared/ui/layout/Layout";
import NotFound from "@/pages/NotFound";
import AboutUs from "@/pages/About";
import Contacts from "@/pages/Contacts";
import Cart from "@/pages/Cart";
export enum Routes {
  Home = "/",
  Catalog = "/catalog",
  About = "/about",
  Contacts = "/contact",
  Cart = "/cart",
  NotFound = "*",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: Routes.Catalog, element: <Catalog /> },
      { path: Routes.About, element: <AboutUs/>},
      { path: Routes.Contacts, element: <Contacts/>},
      { path: Routes.Cart, element: <Cart/>},
      { path: Routes.NotFound, element: <NotFound /> },
    ],
  },
]);

export default router;
