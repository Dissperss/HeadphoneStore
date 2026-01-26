import type { ReactNode } from "react";
import { useState } from "react";
import type { CartContextType } from "./cartContext";
import { CartContext } from "./cartContext";
import type { CartItemType } from "@/types/cart";

type Props = {
    children: ReactNode;
};

export function CartProvider({ children }: Props) {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    const addToCart = (item: Omit<CartItemType, "quantity">) => {
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

    const increaseQuantity = (id: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const decreaseQuantity = (id: number) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        );
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const value: CartContextType = {
        cartItems,
        addToCart,
        totalCount,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
