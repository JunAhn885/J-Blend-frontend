import { ReactNode, useContext, useState, createContext } from "react";
import { ImageListType, ImageType } from "react-images-uploading";

export type Item = {
  type: string;
  title: string;
  price: number | null;
  id: string | number;
  description: string;
  photoData: ImageListType;
};

type ItemContextType = {
  item: Item;
  images: ImageListType;
  setType: (value: string) => void;
  setTitle: (value: string) => void;
  setPrice: (value: number) => void;
  setId: (value: string | number) => void;
  setDescription: (value: string) => void;
  setImages: (image: ImageListType) => void;
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
  const [itemType, setType] = useState("");
  const [itemTitle, setTitle] = useState("");
  const [itemPrice, setPrice] = useState(0);
  const [itemId, setId] = useState<string | number>("");
  const [itemDescription, setDescription] = useState("");
  const [images, setImages] = useState<ImageListType>([]);

  let item: Item = {
    type: itemType,
    title: itemTitle,
    price: itemPrice,
    id: itemId,
    description: itemDescription,
    photoData: images,
  };

  const value: ItemContextType = {
    item,
    images,
    setType,
    setTitle,
    setPrice,
    setId,
    setDescription,
    setImages,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}
