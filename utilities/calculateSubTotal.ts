import { CartItem } from "@/context/cartContext";
import { MenuItem, menu_item } from "@/data/menu_item";

export default function calculateSubTotal(cart: CartItem[] | undefined) {
  let subTotal: number = 0;
  if (cart) {
    cart.forEach((item: CartItem) => {
      const itemId: number = item.id;
      const quantity: number = item.quantity;

      menu_item.forEach((item_type_obj) => {
        const item_type = Object.keys(item_type_obj)[0];
        item_type_obj[item_type].forEach((item: MenuItem) => {
          if (item.id === itemId) {
            const itemTotal: number = item.Price * quantity;
            subTotal += itemTotal;
          }
        });
      });
    });
  }

  return subTotal;
}
