"use client";
import Heading from "components/menu/heading";
import Item from "components/menu/item";
import Navbar from "components/menu/menu-navbar";
import Footer from "components/menu/footer";
import { CartContext } from "@/utilities/addItemToCart";
import { MenuItemContext } from "@/context/menuItemContext";
import { menu_item } from "@/data/menu_item";

export default function Menu() {
  return (
    <div>
      <MenuItemContext.Provider value={menu_item}>
        <Heading />
        <Navbar />
        <Item />
        <Footer />
      </MenuItemContext.Provider>
    </div>
  );
}
