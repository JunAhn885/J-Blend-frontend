import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type CartItem = {
  id: number;
  quantity: number;
  request: string;
};

type CartContextType = {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  decQuantityFromCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  getCartTotalQuantity: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCartContext() {
  const cartContext = useContext(CartContext);
  if (cartContext === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return cartContext;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  function addItemToCart(item: CartItem) {
    const id: number = item.id;
    const quantity = item.quantity;

    // find the index of the item with the matching id. if not found, itemIndex = -1
    const itemIndex = cart.findIndex((item: CartItem) => item.id === id);

    // check if item is in the cart
    if (itemIndex !== -1) {
      const updateCart = [...cart];
      updateCart[itemIndex].quantity += quantity;
      setCart(updateCart);
    } else setCart([...cart, item]);
  }

  function decQuantityFromCart(id: number) {
    const itemIndex = cart.findIndex((item: CartItem) => item.id === id);
    console.log(itemIndex);

    if (itemIndex !== -1) {
      if (cart[itemIndex].quantity === 1) {
        let updateCart = [...cart];
        updateCart.splice(itemIndex, 1);
        setCart(updateCart);
      } else {
        let updateCart = [...cart];
        updateCart[itemIndex].quantity -= 1;
        setCart(updateCart);
      }
    }
  }

  function removeItemFromCart(id: number) {
    const itemIndex = cart.findIndex((item: CartItem) => item.id === id);
    if (itemIndex !== -1) {
      let updateCart = [...cart];
      updateCart.splice(itemIndex, 1);
      setCart(updateCart);
    }
  }

  function getCartTotalQuantity() {
    let cartTotalQuantity = 0;

    cart.forEach((item: CartItem) => {
      cartTotalQuantity += item.quantity;
    });

    return cartTotalQuantity;
  }

  const value: CartContextType = {
    cart,
    addItemToCart,
    decQuantityFromCart,
    removeItemFromCart,
    getCartTotalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
