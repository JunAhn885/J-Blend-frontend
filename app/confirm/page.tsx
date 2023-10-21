"use client";
import styles from "./confirm.module.css";
import Heading from "@/components/confirm/heading";
import OrderDetails from "@/components/confirm/orderDetails";
import { CartProvider } from "@/context/cartContext";
import BackToMenuButton from "@/components/confirm/backToMenuButton";

export default function Confirm() {
  return (
    <div className={styles["confirm-page"]}>
      <CartProvider>
        <Heading />
        <OrderDetails />
        <BackToMenuButton />
      </CartProvider>
    </div>
  );
}
