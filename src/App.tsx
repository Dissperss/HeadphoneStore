import { RouterProvider } from "react-router-dom";
import { router } from "@/router/Router";
import { CartProvider } from "@/context/cart/cartProvider";

function App() {
    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
}

export default App;
