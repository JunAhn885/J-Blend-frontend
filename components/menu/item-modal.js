/* eslint-disable react/react-in-jsx-scope */
"use client";
import styles from "components/stylesheets/item-modal.module.css";
import Image from "next/image";
import { useState } from "react";
import { formatCurrency } from "@/utilities/formatCurrency";

export default function ItemModal({ open, setOpen, item_obj }) {
  const [count, setCount] = useState(1);
  const [instruction, setInstruction] = useState(null);

  console.log(instruction);

  function decCounter() {
    setCount(count - 1);
  }

  function incCounter() {
    setCount(count + 1);
  }

  function calTotalPrice() {
    let price = item_obj["Price"] * count;
    return Math.round(price * 100) / 100;
  }

  // disables dec counter buttom if count == 1 as we cannot have 0 or negative items
  function decCounterButton() {
    if (count === 1) {
      return (
        <button
          onClick={decCounter}
          disabled
          className={styles["button-disabled"]}
        >
          -
        </button>
      );
    } else {
      return <button onClick={decCounter}>-</button>;
    }
  }

  // do not display the modal if open is false
  if (open == false) {
    return null;
  }

  return (
    <div
      onClick={() => {
        setOpen(false);
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
          <h1>{item_obj["Name"]}</h1>
          <h2>{formatCurrency(item_obj["Price"])}</h2>
          <h3>{item_obj["Description"]}</h3>
          <div className={styles["quantity-button-container"]}>
            {decCounterButton()}
            <div className={styles["center-vertically"]}>
              <p>{count}</p>
            </div>
            <button onClick={incCounter}>+</button>
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
                setOpen(false);
                setCount(1);
              }}
              className={styles["exit-button"]}
            >
              x
            </button>
            <button
              className={styles["add-button"]}
            >{`Add to order $${calTotalPrice()}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
