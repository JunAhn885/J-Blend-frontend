"use client";
import styles from "./checkout.module.css";
import Checkout from "@/app/_components/cart/priceBreakdown";
import { CartProvider } from "@/app/_context/cartContext";
import Contact from "@/app/_components/checkout/contact";
import Heading from "@/app/_components/cart/heading";
import { Dispatch, SetStateAction, useState } from "react";

export type nameValueType = {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
};

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const nameValue: nameValueType = {
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
  };

  return (
    <CartProvider>
      <div className={styles["checkout-page"]}>
        <Heading content={"Back to Cart"} />
        <h1>Checkout</h1>
        <div className={styles["checkout-content"]}>
          <Contact nameValue={nameValue} />
          <Checkout
            buttonTag={"Place Order"}
            href={"./confirm"}
            page={"cart"}
          />
        </div>
      </div>
    </CartProvider>
  );
}
