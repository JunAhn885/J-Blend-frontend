import styles from "./stylesheets/cartItem.module.css";
import { CartItem, useCartContext } from "@/app/_context/cartContext";
import Image from "next/image";
import calTotalPrice from "@/app/_util/calTotalPrice";
import QuantityButton from "../frequentlyUsed/quantityButton";
import { menu_item, MenuItem } from "@/app/_data/menu_item";
import { ReactNode } from "react";
import { formatCurrency } from "@/app/_util/formatCurrency";

export default function CartItem({ page }: { page: string }) {
  const {
    cart,
    addItemToCart,
    decQuantityFromCart,
    removeItemFromCart,
    getCartTotalQuantity,
  } = useCartContext();

  // maps through each item in cart and returns jsx of formatted cart items
  const cart_item: ReactNode = cart.map((item: CartItem) => {
    // deconstructing the values inside item object
    const itemId: number = item.id;
    const request: string = item.request;
    const quantity: number = item.quantity;

    // resetting the quantity of item object to 1 so it can be passed to addItemToCart function
    // and only increment the item quantity by 1
    let itemObjQ1: CartItem = { ...item };
    itemObjQ1.quantity = 1;

    let name: string = "";
    let price: number = 0;

    menu_item.forEach((item_obj) => {
      if (item_obj.id === itemId) {
        name = item_obj.name;
        price = item_obj.price;
      }
    });

    const itemTotalPrice: number = calTotalPrice(price, quantity);
    const itemTotalPriceFormatted: string = formatCurrency(itemTotalPrice);
    const renderCart: ReactNode = (
      <div>
        <div className={styles["item-box"]}>
          <div className={styles["left-content"]}>
            <Image src="/chirashi.jpeg" width="100" height="100" alt="photo" />
            <div className={styles["item-description"]}>
              <p className={styles["item-name"]}>{name}</p>
              <p>Special Request:</p>
              <p className={styles["special-request"]}>{request}</p>
              <QuantityButton
                count={quantity}
                increment={() => addItemToCart(itemObjQ1)}
                decrement={() => decQuantityFromCart(itemId)}
              />
            </div>
          </div>
          <div className={styles["right-content"]}>
            <p>{itemTotalPriceFormatted}</p>
            <div className={styles["trash-can"]}>
              <Image
                src="/Trash.svg"
                width="24"
                height="24"
                alt="trash can"
                onClick={() => removeItemFromCart(itemId)}
              />
            </div>
          </div>
        </div>
      </div>
    );

    const renderConfirmation: ReactNode = (
      <div>
        <div className={styles["item-box"]}>
          <div className={styles["left-content"]}>
            <Image src="/chirashi.jpeg" width="100" height="100" alt="photo" />
            <div className={styles["item-description"]}>
              <p className={styles["item-name"]}>{name}</p>
              <p>Special Request:</p>
              <p className={styles["special-request"]}>{request}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </div>
          <div className={styles["right-content"]}>
            <p>{itemTotalPriceFormatted}</p>
          </div>
        </div>
      </div>
    );

    if (page === "confirmation") {
      return renderConfirmation;
    } else return renderCart;
  });

  return (
    <div className={styles["cart-item"]}>
      {page !== "confirmation" ? (
        <h2>YOUR ORDER{` (${getCartTotalQuantity()} ITEMS)`}</h2>
      ) : null}
      {cart.length === 0 ? <h3>Your Cart is Empty</h3> : cart_item}
    </div>
  );
}
