import styles from "components/cart/stylesheets/priceBreakdown.module.css";

export default function PriceBreakdown() {
  return (
    <div className={styles.checkout}>
      <div className={styles["price-breakdown"]}>
        <p>Subtotal</p>
        <p>$67.05</p>
      </div>

      <button className={styles["checkout-button"]}>
        Continue to Checkout
      </button>
    </div>
  );
}
