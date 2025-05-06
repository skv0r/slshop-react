import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "@/pages/Catalog";
import Layout from "@/shared/ui/layout/Layout";
import NotFound from "@/pages/NotFound";
import AboutUs from "@/pages/About";
import Contacts from "@/pages/Contacts";
export enum Routes {
  Home = "/",
  Catalog = "/catalog",
  About = "/about",
  Contacts = "/contact",
  NotFound = "*",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: Routes.Catalog, element: <Catalog /> },
      {path: Routes.About, element: <AboutUs/>},
      {path: Routes.Contacts, element: <Contacts/>},
      { path: Routes.NotFound, element: <NotFound /> },

    ],
  },
]);

export default router;
