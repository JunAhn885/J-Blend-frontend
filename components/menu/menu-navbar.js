import styles from 'components/stylesheets/menu-navbar.module.css'

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
            </div>
            
        </div>
    )
}