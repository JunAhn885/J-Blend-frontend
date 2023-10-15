/* eslint-disable react/react-in-jsx-scope */
import Heading from "components/menu/heading";
import Item from "components/menu/item";
import Navbar from "components/menu/menu-navbar";
import Footer from "components/menu/footer";

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
