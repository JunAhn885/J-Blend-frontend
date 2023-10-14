import styles from 'components/stylesheets/menu-navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    
    // will be fetched from an api endpoint
    const menu_categories = ["Donburi", "Salad", "Soup", "Side", "Drinks"]
    
    const navbar_elements = menu_categories.map((item) => {
        return(
            <a className={styles["hover-underline-animation"]}href={`#${item}`}>{item}</a>
        )
    })
    
    return(
        <div className={styles["full-width"]}>
            <div className={styles["nav-wrapper"]}>
                <div className={styles.search}></div>
                <ul className={styles["menu-navbar"]}>
                    {navbar_elements}
                </ul>
                <div className={styles["shopping-cart"]}></div>
                    <Image
                        src="/cart.svg"
                        width="36"
                        height="36"
                        alt="cart"
                        className={styles.cart}
                    />
                    <div className={styles["cart-quantity"]}>8</div>
            </div>
        </div>
    )
}