"use client";
import styles from "./confirm.module.css";
import Heading from "@/app/_components/confirm/heading";
import OrderDetails from "@/app/_components/confirm/orderDetails";
import { CartProvider } from "@/app/_context/cartContext";
import BackToMenuButton from "@/app/_components/confirm/backToMenuButton";

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
