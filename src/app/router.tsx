import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "@/pages/Catalog";
import Layout from "@/shared/ui/layout/Layout";
import NotFound from "@/pages/NotFound";
export enum Routes {
  Home = "/",
  Catalog= "/catalog",
  NotFound = "*",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: Routes.Catalog, element: <Catalog /> },
      { path: Routes.NotFound, element: <NotFound /> },
    ],
  },
]);

export default router;
