"use client";
import ItemType from "@/components/cms/itemType";
import ItemTitle from "@/components/cms/itemTitle";
import ItemDescription from "@/components/cms/itemDescription";
import ItemPhoto from "@/components/cms/itemPhoto";
import ItemPrice from "@/components/cms/itemPrice";
import ItemId from "@/components/cms/itemId";
import styles from "./cms.module.css";
import AddItemType from "@/components/cms/addItemType";
import { ItemProvider } from "@/context/itemContext";

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
