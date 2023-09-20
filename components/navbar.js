import styles from "./stylesheets/navbar.module.css"
import Image from "next/image"

export default function Navbar(){
    
    return (
        <div className={styles.navbar}>
            <div></div>
            <div className={styles.middle}>
                <Image
                    src="/logo.svg"
                    width={300}
                    height={183}
                    alt="company logo"
                    className={styles["company-logo"]}
                />
                <div className={styles["search-bar"]}>
                    <i class="fa fa-search"></i>
                    <input type="text" placeholder="Search" name="search"/>
                    <button type="submit">search</button>
                </div>
                <div className={styles["shopping-cart"]}>
                    <div className={styles["shopping-cart-left"]}>
                        <Image
                            src="/bag.svg"
                            width={34}
                            height={34}
                            alt="bag"
                        />
                        <p className={styles.quantity}>2</p>
                    </div>
                    <div className={styles["shopping-cart-right"]}>
                        <p>Shopping cart:</p>
                        <p className={styles.price}>$57.00</p>
                    </div>
                </div>
            </div>
            <div></div>
            <h1>hello</h1>
        </div>
    )
}