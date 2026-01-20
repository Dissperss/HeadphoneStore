import type { ReactNode } from "react";
import { useState } from "react";
import type { CartItem, CartContextType } from "./cartContext";
import { CartContext } from "./cartContext";

type Props = {
    children: ReactNode;
};

export function CartProvider({ children }: Props) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: Omit<CartItem, "quantity">) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);

            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const value: CartContextType = {
        cartItems,
        addToCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
