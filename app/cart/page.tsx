"use client";
import styles from "./cartPage.module.css";
import CartItem from "@/components/cart/cartItem";
import Heading from "@/components/cart/heading";
import { CartProvider } from "@/context/cartContext";
import PriceBreakdown from "@/components/cart/priceBreakdown";

export default function Cart() {
  return (
    <CartProvider>
      <div className={styles["cart-page"]}>
        <Heading />
        <h1>Your Cart</h1>
        <div className={styles["cart-content"]}>
          <CartItem />
          <PriceBreakdown />
        </div>
      </div>
    </CartProvider>
  );
}
