'use client'
import styles from 'components/stylesheets/item.module.css'
import Image from "next/image"
import ItemModal from './item-modal'
import { useState, useEffect } from 'react'
import { menu_item } from '@/app/data/menu_item'

export default function Item() {
    const [openModal, setOpenModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    // processes the list of item objects
    function processItem(item_type_obj, key){
        const item_jsx = item_type_obj[key].map(item => {
            return(
                <div onClick={()=> {
                    setOpenModal(true)
                    setSelectedItem(item)
                    }}
                    className={styles["item-box"]}
                >
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

    // by default, do not render the Modal unless user clicks on the item
    // which then selectedItem is updated and modal is rendered
    function renderItemModal(){
        if (selectedItem == null){
            return null
        } else {
            return(
                <ItemModal
                open = {openModal}
                setOpen = {setOpenModal}
                item_obj = {selectedItem}
                />
            )
        }
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
            {renderItemModal()}
            {item_type_component}
        </div>
    )
}