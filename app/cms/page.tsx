import ItemType from "@/components/cms/itemType";
import ItemInput from "@/components/cms/itemInput";
import ItemDescription from "@/components/cms/itemDescription";
import ItemPhoto from "@/components/cms/itemPhoto";
import ItemPrice from "@/components/cms/itemPrice";
import AddItemType from "@/components/cms/addItemType";

export default function CMS() {
  // three of the fields: title, price, and SKU or ID share the same input styling, thus will use ItemInput component for reusability
  return (
    <div>
      <div>
        <AddItemType />
      </div>
      <div>
        <ItemType />
        <ItemInput inputType="Title" width={500} />
        <ItemPrice />
        <ItemInput inputType="SKU or ID" width={500} />
        <ItemDescription />
        <ItemPhoto />
      </div>
    </div>
  );
}
