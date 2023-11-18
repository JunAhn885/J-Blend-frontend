import styles from "./stylesheets/contact.module.css";
import { nameValueType } from "@/app/checkout/page";

export default function Contact({ nameValue }: { nameValue: nameValueType }) {
  const { firstName, lastName, setFirstName, setLastName } = nameValue;

  return (
    <div>
      <h1>Contact</h1>
      <form className={styles["contact-form"]}>
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="First Name"
          required
        ></input>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        ></input>
      </form>
    </div>
  );
}
