import styles from "components/menu/stylesheets/menu-footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>These items may contain raw or undercooked food.</li>
        <li>
          Consuming raw or undercooked meats, poultry, seafood, shellfish, or
          eggs may increase your risk of foodborne illness
        </li>
        <li>All prices and menu items are subject to change without notice.</li>
      </ul>
    </div>
  );
}
