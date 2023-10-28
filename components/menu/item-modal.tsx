/* eslint-disable react/react-in-jsx-scope */
import styles from "components/menu/stylesheets/item-modal.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatCurrency } from "utilities/formatCurrency.ts";
import { MenuItem } from "@/data/menu_item";
import useCounter from "hooks/useCounter.ts";
import calTotalPrice from "@/utilities/calTotalPrice";
import { useCartContext } from "@/context/cartContext";
import QuantityButton from "../frequentlyUsed/quantityButton";

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
  const [shouldRender, setShouldRender] = useState(open);
  const [instruction, setInstruction] = useState("");
  const price: number = item_obj["Price"];
  const description: string = item_obj["Description"];
  const itemName: string = item_obj["Name"];
  const id: number = item_obj["id"];
  const { addItemToCart } = useCartContext();

  useEffect(() => {
    if (open) setShouldRender(true);
  }, [open]);

  const onAnimationEnd = () => {
    if (!open) setShouldRender(false);
  };

  return (
    open && (
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
            <Image
              src="/chirashi.jpeg"
              width="300"
              height="300"
              alt="Chirashi"
            />
            <h1>{itemName}</h1>
            <h2>{formatCurrency(price)}</h2>
            <h3>{description}</h3>

            <QuantityButton
              count={count}
              increment={increment}
              decrement={decrement}
            />
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
                  addItemToCart({
                    id: id,
                    quantity: count,
                    request: instruction,
                  })
                }
              >
                {`Add to order ${formatCurrency(calTotalPrice(price, count))}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
