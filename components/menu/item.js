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
            },
            {
                "Name": "Crab & Shrimp Salad",
                "Description": "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
                "Price": 9.95
            },
            {
                "Name": "Crab & Shrimp Salad",
                "Description": "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
                "Price": 9.95
            },
            {
                "Name": "Crab & Shrimp Salad",
                "Description": "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
                "Price": 9.95
            },
            {
                "Name": "Crab & Shrimp Salad",
                "Description": "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
                "Price": 9.95
            },
            {
                "Name": "Crab & Shrimp Salad",
                "Description": "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
                "Price": 9.95
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
            },
            {
                "Name": "Miso Soup",
                "Description": "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
                "Price": 2.25
            },
            {
                "Name": "Miso Soup",
                "Description": "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
                "Price": 2.25
            },
            {
                "Name": "Miso Soup",
                "Description": "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
                "Price": 2.25
            },
        ]},
    ]

    // processes the list of item objects
    function processItem(item_type_obj, key){
        const item_jsx = item_type_obj[key].map(item => {
            return(
                <div className={styles["item-box"]}>
                    <div className={styles.info}>
                        <p>{item["Name"]}</p>
                        <div className={styles["description-container"]}>    
                            <p className={styles.description}>{item["Description"]}</p>
                        </div>
                        <p>{`$${item["Price"]}`}</p>
                    </div>
                    <Image
                        src="/chirashi.jpeg"
                        width="100"
                        height="100"
                        alt="Chirashi"
                    />
                </div>
            )
        })
        
        return item_jsx
    }

    // passes list of item objects per item type to the processItem function
    const item_type_component = menu_item.map(item_type_obj => {
        const item_type = Object.keys(item_type_obj)[0]
        const item = processItem(item_type_obj, item_type)

        return(
            <div className={styles["item-type"]}>   
                <h1 id={item_type}>{item_type}</h1>
                <div className={styles["item-grid"]}>
                    {item}
                </div>
            </div> 
        )
    })
    
    return(
        <div className={styles["menu-item-whole"]}>
            {item_type_component}
        </div>
    )
}