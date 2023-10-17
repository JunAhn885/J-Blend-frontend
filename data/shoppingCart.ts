export type CartItem = {
  id: number;
  quantity: number;
  request: string;
};

export const shoppingCart: CartItem[] = [
  {
    id: 1,
    quantity: 3,
    request: "",
  },
];
