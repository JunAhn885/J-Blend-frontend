import styles from "components/cart/stylesheets/heading.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Heading({ content }: { content: string }) {
  const href = (): string => {
    if (content === "Back to Menu") {
      return "/menu";
    } else return "/cart";
  };

  return (
    <div className={styles.heading}>
      <Link href={href()} className={styles["back-to-menu"]}>
        <span>&#10094;</span>
        <p>{content}</p>
      </Link>
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
