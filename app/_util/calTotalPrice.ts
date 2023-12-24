// calculates the total price of the item given its quantity and price (rounded to the nearest 100th)
export default function calTotalPrice(
  itemPrice: number,
  quantity: number
): number {
  let totalPrice = itemPrice * quantity;
  return Math.round(totalPrice * 100) / 100;
}
