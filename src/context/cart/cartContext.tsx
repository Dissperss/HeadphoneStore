import { createContext } from "react";
import type { CartItemType } from "@/types/cart";

export type CartContextType = {
    cartItems: CartItemType[];
    addToCart: (item: Omit<CartItemType, "quantity">) => void;
    totalCount: number;
    totalPrice: number;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    totalCount: 0,
    totalPrice: 0,
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    removeFromCart: () => {},
});
