import styles from "./stylesheets/priceBreakdown.module.css";
import { useCartContext } from "@/context/cartContext";
import calculateSubTotal from "utilities/calculateSubTotal.ts";
import { useState, useEffect } from "react";
import { formatCurrency } from "@/utilities/formatCurrency";
import Link from "next/link";

export default function Checkout({
  buttonTag,
  href,
  page,
}: {
  buttonTag: string;
  href: string;
  page: string | undefined;
}) {
  const { cart } = useCartContext();
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    setSubTotal(calculateSubTotal(cart));
  }, [cart]);

  const renderButton = () => {
    if (cart.length === 0 && buttonTag === "Continue to Checkout") {
      return (
        <Link href={href}>
          <button className={styles["checkout-button"]} disabled>
            {buttonTag}
          </button>
        </Link>
      );
    } else {
      return (
        <Link href={href}>
          <button className={styles["checkout-button"]}>{buttonTag}</button>
        </Link>
      );
    }
  };

  return (
    <div className={styles.checkout}>
      <div className={styles["price-breakdown"]}>
        <p>Subtotal</p>
        <p>{formatCurrency(subTotal)}</p>
      </div>
      {page !== "confirmation" ? renderButton() : null}
    </div>
  );
}
