"use client";
import styles from "./checkout.module.css";
import Checkout from "@/components/cart/priceBreakdown";
import { CartProvider } from "@/context/cartContext";
import Contact from "@/components/checkout/contact";
import Heading from "@/components/cart/heading";

export default function CheckoutPage() {
  return (
    <CartProvider>
      <div className={styles["checkout-page"]}>
        <Heading content={"Back to Cart"} />
        <h1>Checkout</h1>
        <div className={styles["checkout-content"]}>
          <Contact />
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
