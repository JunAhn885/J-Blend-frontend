import styles from 'components/stylesheets/item.module.css'
import Image from "next/image"

export default function Item() {
    const menu_item = [
        {"Donburi": [
            {
                "Name": "Chirashi",
                "Description": "tuna, chopped fatty tuna, salmon, ocean trout, albacore, shrimp, fresh water eel, masago with fresh wasabi",
                "Price": 18.95
            },
            {
                "Name": "Sake Don",
                "Description": "salmon with nikiri jouyu (umami soy sauce) with fresh wasabi + yuzu kosho (pepper)",
                "Price": 15.00
            },
            {
                "Name": "Poke",
                "Description": "tuna, salmon, crab salad, seaweed salad, cucumber, masago choice of sauce: yuzu (Japanese citrus) soy or sweet spicy",
                "Price": 15.95
            },
            {
                "Name": "Salmon Poke",
                "Description": "salmon, crab salad, seaweed salad, cucumber, masago choice of sauce: yuzu (Japanese citrus) soy or sweet spicy",
                "Price": 16.45
            }
        ]},
        {"Salad": [
            {
                "Name": "Crab & Shrimp Salad",
                "Description": "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
                "Price": 9.95
            },
            {
                "Name": "Green Salad",
                "Description": "mixed greens, tomato, cucumber, ginger dressing",
                "Price": 6.95
            }
        ]},
        {"Soup": [
            {
                "Name": "Miso Soup",
                "Description": "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
                "Price": 2.25
            },
            {
                "Name": "Asari Miso Soup",
                "Description": "manila clam, scallions",
                "Price": 3.25
            }
        ]},

    ]
    return(
        <div className={styles["menu-item-whole"]}>
            <div className={styles["item-type"]}>
                <h1>Donburi</h1>
                <div className={styles["item-box"]}>
                    <div className={styles.info}>
                        <p>Chirashi</p>
                        <p>tuna, chopped fatty tuna, salmon, ocean trout, albacore, shrimp, fresh water eel, masago with fresh wasabi</p>
                        <p>$18.75</p>
                    </div>
                    <Image
                        src="/chirashi.jpeg"
                        width="100"
                        height="100"
                    />
                </div>
            </div>
        </div>
    )
}