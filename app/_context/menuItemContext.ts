import { MenuItem } from "@/data/menu_item";
import { createContext, useContext } from "react";

export const MenuItemContext = createContext<MenuItem[] | undefined>(undefined);

export function useMenuItemContext() {
  const menu_item = useContext(MenuItemContext);

  // throw error if menu_item is undefined. This could happend when
  // there's a server error retrieving data or context provider is not wrapped properly
  if (menu_item === undefined) {
    throw new Error(
      "menu item is undefined. check for server error or if context provider is warpped poperly"
    );
  }

  return menu_item;
}
