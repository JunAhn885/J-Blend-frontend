"use client";
import Heading from "@/app/_components/menu/heading";
import Item from "@/app/_components/menu/item";
import Navbar from "@/app/_components/menu/menu-navbar";
import Footer from "@/app/_components/menu/footer";
import { MenuItemContext } from "@/app/_context/menuItemContext";
import { menu_item } from "@/app/_data/menu_item";
import { CartProvider } from "@/app/_context/cartContext";

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
