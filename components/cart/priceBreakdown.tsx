import styles from "components/cart/stylesheets/priceBreakdown.module.css";
import { useCartContext } from "@/context/cartContext";
import calculateSubTotal from "utilities/calculateSubTotal.ts";
import { useState, useEffect } from "react";
import { formatCurrency } from "@/utilities/formatCurrency";

export default function Checkout() {
  const { cart } = useCartContext();
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    setSubTotal(calculateSubTotal(cart));
  }, [cart]);

  return (
    <div className={styles.checkout}>
      <div className={styles["price-breakdown"]}>
        <p>Subtotal</p>
        <p>{formatCurrency(subTotal)}</p>
      </div>
      <button className={styles["checkout-button"]}>
        Continue to Checkout
      </button>
    </div>
  );
}
