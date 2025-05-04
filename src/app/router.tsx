import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "@/layouts/layout";
import Catalog from "@/pages/Catalog";

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
      { path: Routes.NotFound, element: <div>Not Found</div> },
    ],
  },
]);

export default router;
