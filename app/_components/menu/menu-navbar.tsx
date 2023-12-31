/* eslint-disable react/react-in-jsx-scope */
import { useCartContext } from "@/app/_context/cartContext";
import styles from "./stylesheets/menu-navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // will be fetched from an api endpoint
  const menu_categories = ["Donburi", "Salad", "Soup", "Side", "Drinks"];
  const { getCartTotalQuantity } = useCartContext();

  const navbar_elements = menu_categories.map((item) => {
    return (
      <a
        className={styles["hover-underline-animation"]}
        key={item}
        href={`#${item}`}
      >
        {item}
      </a>
    );
  });

  return (
    <div className={styles["full-width"]}>
      <div className={styles["nav-wrapper"]}>
        <div className={styles.search}></div>
        <ul className={styles["menu-navbar"]}>{navbar_elements}</ul>
        <Link href="/cart" className={styles["shopping-cart"]}>
          <Image
            src="/cart.svg"
            width="36"
            height="36"
            alt="cart"
            className={styles.cart}
          />
          <div className={styles["cart-quantity"]}>
            {getCartTotalQuantity()}
          </div>
        </Link>
      </div>
    </div>
  );
}
