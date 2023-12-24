import styles from "./stylesheets/backToMenuButton.module.css";
import Link from "next/link";

export default function BackToMenuButton() {
  return (
    <Link href="./menu" className={styles["link-component"]}>
      <button className={styles["back-to-menu-button"]}>
        &larr; Back to Menu
      </button>
    </Link>
  );
}
