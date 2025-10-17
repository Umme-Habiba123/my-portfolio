import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Blogs from "../components/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
]);