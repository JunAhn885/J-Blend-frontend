// calculates the total price of the item given its quantity and price
export default function calTotalPrice(
  itemPrice: number,
  quantity: number
): number {
  let totalPrice = itemPrice * quantity;
  return Math.round(totalPrice * 100) / 100;
}
