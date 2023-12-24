import styles from "./stylesheets/heading.module.css";
import Image from "next/image";

export default function Heading() {
  return (
    <div className={styles.heading}>
      <Image src="./checkmark.svg" width="100" height="100" alt="checkmark" />
      <h1>Your order has been confirmed!</h1>
      <h2>
        Your name will be called once the order is ready. Details of your order
        can be found below.
      </h2>
    </div>
  );
}
