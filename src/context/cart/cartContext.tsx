import { createContext } from "react";

export type CartItem = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};

export type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
};

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
});
