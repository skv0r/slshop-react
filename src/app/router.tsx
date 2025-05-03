import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "@/layouts/layout";

export enum Routes {
  Home = "/",
  NotFound = "*",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      //{ path: Routes.Home, element: <Home /> },
      { path: Routes.NotFound, element: <div>Not Found</div> },
    ],
  },
]);

export default router;
