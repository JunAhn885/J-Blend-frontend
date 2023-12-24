"use client";
import ItemType from "@/app/_components/cms/itemType";
import ItemTitle from "@/app/_components/cms/itemTitle";
import ItemDescription from "@/app/_components/cms/itemDescription";
import ItemPhoto from "@/app/_components/cms/itemPhoto";
import ItemPrice from "@/app/_components/cms/itemPrice";
import ItemId from "@/app/_components/cms/itemId";
import styles from "./cms.module.css";
import AddItemType from "@/app/_components/cms/addItemType";
import { ItemProvider } from "@/app/_context/itemContext";

export default function CMS() {
  // three of the fields: title, price, and SKU or ID share the same input styling, thus will use ItemInput component for reusability
  return (
    <div>
      <ItemProvider>
        <div>
          <AddItemType />
        </div>
        <div>
          <ItemType />
          <ItemTitle />
          <div className={styles["align-horizontal"]}>
            <ItemPrice />
            <ItemId />
          </div>
          <ItemDescription />
          <ItemPhoto />
        </div>
      </ItemProvider>
    </div>
  );
}
