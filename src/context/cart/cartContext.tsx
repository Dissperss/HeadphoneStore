import { createContext } from "react";

export type CartItemType = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};

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
