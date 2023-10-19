import styles from "components/cart/stylesheets/cartItem.module.css";
import { useCartContext } from "@/context/cartContext";
import Image from "next/image";
import calTotalPrice from "@/utilities/calTotalPrice";
import QuantityButton from "../frequentlyUsed/quantityButton";
import useCounter from "@/hooks/useCounter";

export default function CartItem() {
  const { count, increment, decrement } = useCounter(1);

  const {
    cart,
    addItemToCart,
    decQuantityFromCart,
    removeItemFromCart,
    getCartTotalQuantity,
  } = useCartContext();

  return (
    <div className={styles["cart-item"]}>
      <h2>YOUR ORDER{`(5 ITEM)`}</h2>
      <div className={styles["item-box"]}>
        <div className={styles["left-content"]}>
          <Image src="/chirashi.jpeg" width="100" height="100" alt="photo" />
          <div className={styles["item-description"]}>
            <p className={styles["item-name"]}>CHIRASHI</p>
            <p>Special Request:</p>
            <p className={styles["special-request"]}>
              Please remove this and that!
            </p>

            <QuantityButton
              count={count}
              increment={increment}
              decrement={decrement}
            />
          </div>
        </div>

        <div className={styles["right-content"]}>
          <p>$135.2</p>
          <div className={styles["trash-can"]}>
            <Image src="/Trash.svg" width="24" height="24" alt="trash can" />
          </div>
        </div>
      </div>
    </div>
  );
}
