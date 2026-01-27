import { useContext } from "react";
import { CartContext } from "@/context/cart/cartContext";

export const useCart = () => {
    const {
        cartItems,
        totalCount,
        totalPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useContext(CartContext);
    return {
        cartItems,
        totalCount,
        totalPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    };
};
