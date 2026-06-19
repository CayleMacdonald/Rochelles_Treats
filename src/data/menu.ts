export interface MenuItem {
  id: string;
  category: 'pasta' | 'chicken' | 'hearty' | 'specials';
  name: string;
  description: string;
  prices: { label: string; amount: number }[];
  badge?: 'bestseller' | 'popular' | 'veg' | 'spicy' | 'new';
  emoji: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'pasta-chicken',
    category: 'pasta',
    name: 'Creamy Cheesy Chicken Pasta',
    description: 'Rich, creamy, loaded with cheese and tender chicken. A crowd-favourite made fresh every day.',
    prices: [
      { label: 'Small', amount: 55 },
      { label: 'Regular', amount: 75 },
    ],
    badge: 'bestseller',
    emoji: '🍝',
  },
  {
    id: 'pasta-mushroom',
    category: 'pasta',
    name: 'Creamy Garlic Mushroom Pasta',
    description: 'Buttery garlic mushroom pasta in a silky creamy sauce. A hearty vegetarian favourite.',
    prices: [
      { label: 'Small', amount: 50 },
      { label: 'Regular', amount: 70 },
    ],
    badge: 'veg',
    emoji: '🍄',
  },
  {
    id: 'chicken-schnitzel',
    category: 'chicken',
    name: 'Chicken Schnitzel + Pepper Sauce',
    description: 'Golden crispy schnitzel drizzled with rich pepper sauce. Served with chips or fresh green salad.',
    prices: [{ label: 'Portion', amount: 75 }],
    badge: 'popular',
    emoji: '🍗',
  },
  {
    id: 'chicken-bbq-wings',
    category: 'chicken',
    name: 'BBQ Chicken Wings (6 pcs)',
    description: 'Smoky BBQ glazed wings served with fluffy rice. Finger-licking good.',
    prices: [{ label: 'Portion', amount: 70 }],
    badge: 'popular',
    emoji: '🍖',
  },
  {
    id: 'chicken-spicy-wings',
    category: 'chicken',
    name: 'Spicy Chicken Wings (6 pcs)',
    description: 'Fire-kissed spicy wings served with fluffy rice. For those who like the heat!',
    prices: [{ label: 'Portion', amount: 70 }],
    badge: 'spicy',
    emoji: '🌶️',
  },
  {
    id: 'chicken-bowl',
    category: 'hearty',
    name: 'Chicken Bowl',
    description: 'Tender chicken stew or curry with fluffy steamed rice. Wholesome, warming, and satisfying.',
    prices: [{ label: 'Portion', amount: 60 }],
    badge: 'popular',
    emoji: '🥘',
  },
  {
    id: 'cottage-pie',
    category: 'hearty',
    name: 'Cheesy Cottage Pie',
    description: 'Savory mince layered with creamy mashed potato and golden melted cheese. Pure comfort.',
    prices: [{ label: 'Portion', amount: 65 }],
    emoji: '🥧',
  },
  {
    id: 'phutu-pap',
    category: 'hearty',
    name: 'Phutu Pap + Tomato Gravy + Chuck Meat',
    description: 'A traditional South African favourite — slow-cooked chuck meat, phutu pap, and rich tomato gravy.',
    prices: [{ label: 'Portion', amount: 70 }],
    emoji: '🍲',
  },
  {
    id: 'steak-mash',
    category: 'hearty',
    name: 'Steak & Mash',
    description: 'Juicy steak served with creamy mash, pepper sauce, and roasted butternut. The ultimate comfort meal.',
    prices: [{ label: 'Portion', amount: 95 }],
    badge: 'bestseller',
    emoji: '🥩',
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Items', emoji: '🍽️' },
  { id: 'pasta', label: 'Pasta', emoji: '🍝' },
  { id: 'chicken', label: 'Chicken', emoji: '🍗' },
  { id: 'hearty', label: 'Hearty Meals', emoji: '🍲' },
];

export const BADGE_CONFIG: Record<string, { label: string; color: string }> = {
  bestseller: { label: 'Best Seller', color: 'bg-brand-500 text-white' },
  popular: { label: 'Popular', color: 'bg-terracotta-500 text-white' },
  veg: { label: 'Vegetarian', color: 'bg-sage-500 text-white' },
  spicy: { label: 'Spicy!', color: 'bg-orange-500 text-white' },
  new: { label: 'New!', color: 'bg-brand-400 text-white' },
};
