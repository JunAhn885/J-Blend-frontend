import { ReactNode, useContext, useState } from "react";
import { createContext } from "vm";
import { ImageListType, ImageType } from "react-images-uploading";

export type Item = {
  type: string;
  title: string;
  price: number | null;
  id: string | number;
  description: string;
  photoData: ImageListType | null;
};

type ItemContextType = {
  item: Item;
  setType: (value: string) => void;
  setTitle: (value: string) => void;
  setPrice: (value: number) => void;
  setId: (value: string | number) => void;
  setDescription: (value: string) => void;
  setPhotoData: (image: ImageListType) => void;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export function useItemContext() {
  const itemContext = useContext(ItemContext);
  if (itemContext == undefined) {
    throw new Error("useItemContext must be used within a ItemProvider");
  }
  return itemContext;
}

export function ItemProvider({ children }: { children: ReactNode }) {
  const [itemType, setItemType] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemId, setItemId] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPhotoData, setItemPhotoData] = useState(null);

  let item: Item = {
    type: itemType,
    title: itemTitle,
    price: itemPrice,
    id: itemId,
    description: itemDescription,
    photoData: itemPhotoData,
  };

  const value: ItemContextType = {
    item: item,
    setType: setItemType,
    setTitle: setItemTitle,
    setPrice: setItemPrice,
    setId: setItemId,
    setDescription: setItemDescription,
    setPhotoData: setItemPhotoData,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}
