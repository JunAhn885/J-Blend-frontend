import styles from "./stylesheets/quantityButton.module.css";
import { ReactNode } from "react";

type IncreOrDecreFunction = () => void | ((value: any) => void);

export default function QuantityButton({
  count,
  increment,
  decrement,
}: {
  count: number;
  increment: IncreOrDecreFunction;
  decrement: IncreOrDecreFunction;
}) {
  function decCounterButton(): ReactNode {
    if (count === 1) {
      return (
        <button
          onClick={() => decrement()}
          disabled
          className={styles["button-disabled"]}
        >
          -
        </button>
      );
    } else {
      return <button onClick={() => decrement()}>-</button>;
    }
  }

  return (
    <div className={styles["quantity-button-container"]}>
      {decCounterButton()}
      <div className={styles["center-vertically"]}>
        <p>{count}</p>
      </div>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}
