import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Blogs from "../components/Blogs/Blogs";
import ProjectDetails from "../components/FeaturedProjects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
  {
    path:"/projects/:id",
    element: <ProjectDetails></ProjectDetails>,
  },
]);