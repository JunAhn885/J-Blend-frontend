import styles from "./stylesheets/orderDetails.module.css";
import CartItem from "../cart/cartItem";
import Checkout from "../cart/priceBreakdown";

export default function OrderDetails() {
  return (
    <div className={styles["order-detail-section"]}>
      <div className={styles["name-section"]}>
        <h1>Name</h1>
        <h2>Jun Ahn</h2>
      </div>
      <div className={styles["item-section"]}>
        <h1>Items</h1>
        <CartItem page={"confirmation"} />
      </div>
      <div>
        <Checkout buttonTag="null" href="null" page="confirmation" />
      </div>
    </div>
  );
}
