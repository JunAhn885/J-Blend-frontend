export type MenuItem = {
  id: number;
  Name: string;
  Description: string;
  Price: number;
};

export type MenuItemTest = {
  id: number;
  name: string;
  description: string;
  price: number;
  itemType: string;
};

export type MenuCategory = {
  [key: string]: MenuItem[];
};

export const menu_item: MenuCategory[] = [
  {
    Donburi: [
      {
        id: 1,
        Name: "Chirashi",
        Description:
          "tuna, chopped fatty tuna, salmon, ocean trout, albacore, shrimp, fresh water eel, masago with fresh wasabi",
        Price: 18.95,
      },
      {
        id: 2,
        Name: "Sake Don",
        Description:
          "salmon with nikiri jouyu (umami soy sauce) with fresh wasabi + yuzu kosho (pepper)",
        Price: 15.0,
      },
      {
        id: 3,
        Name: "Poke",
        Description:
          "tuna, salmon, crab salad, seaweed salad, cucumber, masago choice of sauce: yuzu (Japanese citrus) soy or sweet spicy",
        Price: 15.95,
      },
      {
        id: 4,
        Name: "Salmon Poke",
        Description:
          "salmon, crab salad, seaweed salad, cucumber, masago choice of sauce: yuzu (Japanese citrus) soy or sweet spicy",
        Price: 16.45,
      },
    ],
  },
  {
    Salad: [
      {
        id: 5,
        Name: "Crab & Shrimp Salad",
        Description:
          "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
        Price: 9.95,
      },
      {
        id: 6,
        Name: "Green Salad",
        Description: "mixed greens, tomato, cucumber, ginger dressing",
        Price: 6.95,
      },
      {
        id: 7,
        Name: "Crab & Shrimp Salad",
        Description:
          "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
        Price: 9.95,
      },
      {
        id: 8,
        Name: "Crab & Shrimp Salad",
        Description:
          "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
        Price: 9.95,
      },
      {
        id: 9,
        Name: "Crab & Shrimp Salad",
        Description:
          "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
        Price: 9.95,
      },
      {
        id: 10,
        Name: "Crab & Shrimp Salad",
        Description:
          "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
        Price: 9.95,
      },
      {
        id: 11,
        Name: "Crab & Shrimp Salad",
        Description:
          "crab, shrimp, masago, cucumber, tomato, greens with citrus mayo or ginger dressing",
        Price: 9.95,
      },
    ],
  },
  {
    Soup: [
      {
        id: 12,
        Name: "Miso Soup",
        Description: "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
        Price: 2.25,
      },
      {
        id: 13,
        Name: "Asari Miso Soup",
        Description: "manila clam, scallions",
        Price: 3.25,
      },
      {
        id: 14,
        Name: "Miso Soup",
        Description: "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
        Price: 2.25,
      },
      {
        id: 15,
        Name: "Miso Soup",
        Description: "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
        Price: 2.25,
      },
      {
        id: 16,
        Name: "Miso Soup",
        Description: "aka (red) + shiro (white) miso, tofu, seaweed, scallions",
        Price: 2.25,
      },
    ],
  },
];

export const menu_item_test: MenuItemTest[] = [
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
