export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  itemType: string;
};

export const menu_item: MenuItem[] = [
  {
    id: 1,
    name: "Chirashi",
    description:
      "tuna, chopped fatty tuna, salmon, ocean trout, albacore, shrimp, fresh water eel, masago with fresh wasabi",
    price: 18.95,
    itemType: "Donburi",
  },
  {
    id: 2,
    name: "Sake Don",
    description:
      "salmon with nikiri jouyu (umami soy sauce) with fresh wasabi + yuzu kosho (pepper)",
    price: 15.0,
    itemType: "Donburi",
  },
  {
    id: 3,
    name: "Poke",
    description:
      "tuna, salmon, crab salad, seaweed salad, cucumber, masago choice of sauce: yuzu (Japanese citrus) soy or sweet spicy",
    price: 15.95,
    itemType: "Donburi",
  },
  {
    id: 5,
    name: "Crab & Shrimp Salad",
    description:
      "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
    price: 9.95,
    itemType: "Salad",
  },
  {
    id: 6,
    name: "Green Salad",
    description: "mixed greens, tomato, cucumber, ginger dressing",
    price: 6.95,
    itemType: "Salad",
  },
  {
    id: 7,
    name: "Crab & Shrimp Salad",
    description:
      "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
    price: 9.95,
    itemType: "Salad",
  },
  {
    id: 8,
    name: "Crab & Shrimp Salad",
    description:
      "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
    price: 9.95,
    itemType: "Salad",
  },
  {
    id: 12,
    name: "Miso Soup",
    description: "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
    price: 2.25,
    itemType: "Soup",
  },
  {
    id: 13,
    name: "Asari Miso Soup",
    description: "manila clam, scallions",
    price: 3.25,
    itemType: "Soup",
  },
  {
    id: 14,
    name: "Miso Soup",
    description: "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
    price: 2.25,
    itemType: "Soup",
  },
];
