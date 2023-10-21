import styles from "./stylesheets/contact.module.css";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form className={styles["contact-form"]}>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
      </form>
    </div>
  );
}
