import styles from "components/cart/stylesheets/heading.module.css";
import Image from "next/image";

export default function Heading() {
  return (
    <div className={styles.heading}>
      <a href="/menu" className={styles["back-to-menu"]}>
        <span>&#10094;</span>
        <p>Back to Menu</p>
      </a>
      <Image
        className={styles.logo}
        src="/logo.jpeg"
        height="150"
        width="150"
        alt="logo"
      />
      <div></div>
    </div>
  );
}
