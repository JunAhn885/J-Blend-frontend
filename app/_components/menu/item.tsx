/* eslint-disable react/react-in-jsx-scope */
"use client";
import styles from "./stylesheets/item.module.css";
import Image from "next/image";
import ItemModal from "./item-modal";
import { useState } from "react";
import { MenuItem, menu_item } from "@/app/_data/menu_item";
import { formatCurrency } from "@/app/_util/formatCurrency";
import useToggle from "@/app/_hooks/useToggle";

export default function Item() {
  const { value, toggleValue } = useToggle(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  // const menu_item = useMenuItemContext();
  const item_type_list: string[] = ["Donburi", "Salad", "Soup"];

  /*
    based on the exsisting menu types (stored in an array), display only the matching
    itemType in the menu_item list. 
      algorithm: for each item type, iterate through the whole menu_item array, and display the matching
      item type
  */
  const item_type_component = item_type_list.map((item_type: string) => {
    const item = menu_item.map((item_obj: MenuItem) => {
      if (item_obj.itemType === item_type) {
        return (
          <div
            onClick={() => {
              toggleValue();
              setSelectedItem(item_obj);
            }}
            className={styles["item-box"]}
            key={item_obj.id}
          >
            <div className={styles.info}>
              <p>{item_obj.name}</p>
              <div className={styles["description-container"]}>
                <p className={styles.description}>{item_obj.description}</p>
              </div>
              <p>{formatCurrency(item_obj.price)}</p>
            </div>
            <Image
              src="/chirashi.jpeg"
              width="100"
              height="100"
              alt="Chirashi"
            />
          </div>
        );
      }
    });

    return (
      <div className={styles["item-type"]} key={item_type}>
        <h1 id={item_type}>{item_type}</h1>
        <div className={styles["item-grid"]}>{item}</div>
      </div>
    );
  });

  // by default, do not render the Modal unless user clicks on the item
  // which then selectedItem is updated and modal is rendered
  function renderItemModal() {
    if (selectedItem == null) {
      return null;
    } else {
      return (
        <ItemModal open={value} setOpen={toggleValue} item_obj={selectedItem} />
      );
    }
  }

  return (
    <div className={styles["menu-item-whole"]}>
      {renderItemModal()}
      {item_type_component}
    </div>
  );
}
