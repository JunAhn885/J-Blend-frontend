"use client";
import styles from "./cartPage.module.css";
import CartItem from "@/app/_components/cart/cartItem";
import Heading from "@/app/_components/cart/heading";
import { CartProvider } from "@/app/_context/cartContext";
import Checkout from "@/app/_components/cart/priceBreakdown";

export default function Cart() {
  return (
    <CartProvider>
      <div className={styles["cart-page"]}>
        <Heading content={"Back to Menu"} />
        <h1>Your Cart</h1>
        <div className={styles["cart-content"]}>
          <CartItem page={"cart"} />
          <Checkout
            buttonTag={"Continue to Checkout"}
            href={"./checkout"}
            page={"cart"}
          />
        </div>
      </div>
    </CartProvider>
  );
}
