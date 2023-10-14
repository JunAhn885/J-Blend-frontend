import Heading from "@/components/menu/heading";
import Item from "@/components/menu/item";
import Navbar from "@/components/menu/menu-navbar";
import Footer from "@/components/menu/footer";
import React from "react";

export default function Menu() {
  return (
    <div>
      <Heading />
      <Navbar />
      <Item />
      <Footer />
    </div>
  );
}
