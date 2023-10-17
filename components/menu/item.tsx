/* eslint-disable react/react-in-jsx-scope */
"use client";
import styles from "components/stylesheets/item.module.css";
import Image from "next/image";
import ItemModal from "./item-modal";
import { useContext, useState } from "react";
import { MenuItem, MenuCategory } from "data/menu_item";
import { formatCurrency } from "utilities/formatCurrency";
import useToggle from "@/hooks/useToggle";
import { useMenuItemContext } from "@/context/menuItemContext";

export default function Item() {
  const { value, toggleValue } = useToggle(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const menu_item = useMenuItemContext();

  // processes the list of item objects
  function processItem(item_type_obj: MenuCategory, key: string) {
    const item_jsx = item_type_obj[key].map((item: MenuItem) => {
      return (
        <div
          onClick={() => {
            toggleValue();
            setSelectedItem(item);
          }}
          className={styles["item-box"]}
          id={item.id}
          key={item.id}
        >
          <div className={styles.info}>
            <p>{item["Name"]}</p>
            <div className={styles["description-container"]}>
              <p className={styles.description}>{item["Description"]}</p>
            </div>
            <p>{formatCurrency(item["Price"])}</p>
          </div>
          <Image src="/chirashi.jpeg" width="100" height="100" alt="Chirashi" />
        </div>
      );
    });

    return item_jsx;
  }

  // passes list of item objects per item type to the processItem function
  const item_type_component = menu_item.map((item_type_obj: MenuCategory) => {
    const item_type = Object.keys(item_type_obj)[0];
    const item = processItem(item_type_obj, item_type);

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
