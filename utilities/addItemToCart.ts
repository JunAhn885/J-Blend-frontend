export type CartItem = {
  id: number;
  quantity: number;
  request: string;
};

export const shoppingCart: CartItem[] = [];

export default function addItemToCart(item: CartItem) {
  const id: number = item.id;
  const quantity = item.quantity;
  let itemInCart: boolean = false;

  // check if item is in the cart
  shoppingCart.forEach((item) => {
    if (item.id === id) {
      itemInCart = !itemInCart;
    }
  });

  // if item is in the cart, update the quantity. if not, add new item to cart
  if (itemInCart) {
    shoppingCart.forEach((item, index) => {
      if (item.id == id) {
        shoppingCart[index].quantity += quantity;
      }
    });
  } else shoppingCart.push(item);

  console.log(shoppingCart);
}
