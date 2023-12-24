/* eslint-disable react/react-in-jsx-scope */
import styles from "./stylesheets/heading.module.css";
import Image from "next/image";

export default function Heading() {
  return (
    <div className={styles.heading}>
      <Image
        src="/jBlend_logo.svg"
        width="250"
        height="250"
        alt="logo"
        className={styles.logo}
      />
      <div className={styles["event-notes"]}>
        <p>
          Substitutions and/or any special request may not be accommodatable.
          Aburi Sake Don is not available for take-out due to food safety
          concerns.
        </p>
        <p>
          Foods from restaurant that are picked up or delivered should be
          consumed immediately. Delivery or take-out foods purchased in advance
          for eating later should be maintained at proper temperatures until
          eaten.
        </p>
        <p>
          We truly value the quality of our food and safety of our customers.
        </p>
      </div>
    </div>
  );
}
