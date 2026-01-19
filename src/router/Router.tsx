import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../provides/Layout";
import { HomePage, CartPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "cart",
                element: <CartPage />,
            },
        ],
    },
]);
