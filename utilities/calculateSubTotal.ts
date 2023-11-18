import { CartItem } from "@/context/cartContext";
import { MenuItem, menu_item } from "@/data/menu_item";

export default function calculateSubTotal(cart: CartItem[] | undefined) {
  let subTotal: number = 0;
  if (cart) {
    cart.forEach((item: CartItem) => {
      const itemId: number = item.id;
      const quantity: number = item.quantity;

      menu_item.forEach((item_obj) => {
        if (item_obj.id === itemId) {
          const itemTotal: number = item_obj.price * quantity;
          subTotal += itemTotal;
        }
      });
    });
  }

  return subTotal;
}
