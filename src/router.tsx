import {
    createBrowserRouter,
} from "react-router-dom";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";

const router = createBrowserRouter([
    {
        path: "/blogs",
        element: <Blogs></Blogs>,
    },
    {
        path: "/blog",
        element: <Blog></Blog>,
    }
]);

export default router