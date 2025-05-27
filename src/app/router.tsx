import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "@/pages/Catalog";
import Layout from "@/shared/ui/layout/Layout";
import NotFound from "@/pages/NotFound";
import AboutUs from "@/pages/About";
import Contacts from "@/pages/Contacts";
import Cart from "@/pages/Cart";
import ProductDetail from "@/pages/ProductDetails";
import Payment from "@/pages/Payment";
import PaymentSuccess from "@/pages/PaymentSuccess";
import PaymentFailure from "@/pages/PaymentFailure";
export enum Routes {
  Home = "/",
  Catalog = "/catalog",
  About = "/about",
  Contacts = "/contact",
  Cart = "/cart",
  Product = "/product/:id",
  Payment = "/payment",
  PaymentFailure = "/payment/failure",
  PaymentSuccess = "/payment/success",
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
      { path: Routes.Product, element: <ProductDetail/>},
      { path: Routes.Payment, element: <Payment/>},
      { path: Routes.PaymentSuccess, element: <PaymentSuccess/>},
      { path: Routes.PaymentFailure, element: <PaymentFailure/>},
      { path: Routes.NotFound, element: <NotFound /> },
    ],
  },
]);

export default router;
