"use client";
import Heading from "components/menu/heading";
import Item from "components/menu/item";
import Navbar from "components/menu/menu-navbar";
import Footer from "components/menu/footer";
import { MenuItemContext } from "@/context/menuItemContext";
import { menu_item } from "@/data/menu_item";
import { CartProvider } from "@/context/cartContext";

export default function Menu() {
  return (
    <div>
      <MenuItemContext.Provider value={menu_item}>
        <CartProvider>
          <Heading />
          <Navbar />
          <Item />
          <Footer />
        </CartProvider>
      </MenuItemContext.Provider>
    </div>
  );
}
