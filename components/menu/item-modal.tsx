/* eslint-disable react/react-in-jsx-scope */
import styles from "components/stylesheets/item-modal.module.css";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { formatCurrency } from "utilities/formatCurrency.ts";
import { MenuItem } from "@/data/menu_item";
import useCounter from "hooks/useCounter.ts";
import calTotalPrice from "@/utilities/calTotalPrice";
import addItemToCart from "@/context/cartContext";

export default function ItemModal({
  // props
  open,
  setOpen,
  item_obj,
}: {
  // types of each props
  open: boolean;
  setOpen: () => void;
  item_obj: MenuItem;
}) {
  const { count, setCount, increment, decrement } = useCounter(1);
  const [instruction, setInstruction] = useState("");
  const price: number = item_obj["Price"];
  const description: string = item_obj["Description"];
  const itemName: string = item_obj["Name"];
  const id: number = item_obj["id"];

  // disables dec counter buttom if count == 1 as we cannot have 0 or negative items
  function decCounterButton(): ReactNode {
    if (count === 1) {
      return (
        <button
          onClick={decrement}
          disabled
          className={styles["button-disabled"]}
        >
          -
        </button>
      );
    } else {
      return <button onClick={decrement}>-</button>;
    }
  }

  // do not display the modal if open is false
  if (open == false) {
    return null;
  }

  return (
    <div
      onClick={() => {
        setOpen();
        setCount(1);
      }}
      className={styles.overlay}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modal}
      >
        <div className={styles["modal-content"]}>
          <Image src="/chirashi.jpeg" width="300" height="300" alt="Chirashi" />
          <h1>{itemName}</h1>
          <h2>{formatCurrency(price)}</h2>
          <h3>{description}</h3>
          <div className={styles["quantity-button-container"]}>
            {decCounterButton()}
            <div className={styles["center-vertically"]}>
              <p>{count}</p>
            </div>
            <button onClick={increment}>+</button>
          </div>
          <form className={styles["special-instruction"]}>
            <label>Special Instructions:</label>
            <input
              type="text"
              id="instruction"
              name="special instruction"
              onChange={(e) => {
                setInstruction(e.target.value);
              }}
            />
          </form>
          <div className={styles["exit-add-button-container"]}>
            <button
              onClick={() => {
                setOpen();
                setCount(1);
              }}
              className={styles["exit-button"]}
            >
              x
            </button>
            <button
              className={styles["add-button"]}
              onClick={() =>
                addItemToCart({ id: id, quantity: count, request: instruction })
              }
            >
              {`Add to order ${formatCurrency(calTotalPrice(price, count))}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
