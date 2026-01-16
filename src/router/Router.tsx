import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../provides/Layout";
import { HomePage } from "../pages";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            // {
            //     path: "/cart",
            //     element: <CartPage/>
            // }
        ],
    },
]);
