export interface MenuItem {
  id: string;
  category: 'pasta' | 'chicken' | 'hearty' | 'specials';
  name: string;
  description: string;
  prices: { label: string; amount: number }[];
  badge?: 'bestseller' | 'popular' | 'veg' | 'spicy' | 'new';
  emoji: string;
  color: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Pasta
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
    color: 'from-buttercup-400 to-buttercup-300',
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
    color: 'from-lagoon-400 to-lagoon-300',
  },
  // Chicken
  {
    id: 'chicken-schnitzel',
    category: 'chicken',
    name: 'Chicken Schnitzel + Pepper Sauce',
    description: 'Golden crispy schnitzel drizzled with rich pepper sauce. Served with chips or fresh green salad.',
    prices: [{ label: 'Portion', amount: 75 }],
    badge: 'popular',
    emoji: '🍗',
    color: 'from-cherry-400 to-sweet-400',
  },
  {
    id: 'chicken-bbq-wings',
    category: 'chicken',
    name: 'BBQ Chicken Wings (6 pcs)',
    description: 'Smoky BBQ glazed wings served with fluffy rice. Finger-licking good.',
    prices: [{ label: 'Portion', amount: 70 }],
    badge: 'popular',
    emoji: '🍖',
    color: 'from-orange-400 to-amber-300',
  },
  {
    id: 'chicken-spicy-wings',
    category: 'chicken',
    name: 'Spicy Chicken Wings (6 pcs)',
    description: 'Fire-kissed spicy wings served with fluffy rice. For those who like the heat!',
    prices: [{ label: 'Portion', amount: 70 }],
    badge: 'spicy',
    emoji: '🌶️',
    color: 'from-cherry-500 to-cherry-400',
  },
  // Hearty
  {
    id: 'chicken-bowl',
    category: 'hearty',
    name: 'Chicken Bowl',
    description: 'Tender chicken stew or curry with fluffy steamed rice. Wholesome, warming, and satisfying.',
    prices: [{ label: 'Portion', amount: 60 }],
    badge: 'popular',
    emoji: '🥘',
    color: 'from-amber-400 to-buttercup-300',
  },
  {
    id: 'cottage-pie',
    category: 'hearty',
    name: 'Cheesy Cottage Pie',
    description: 'Savory mince layered with creamy mashed potato and golden melted cheese. Pure comfort.',
    prices: [{ label: 'Portion', amount: 65 }],
    emoji: '🥧',
    color: 'from-sweet-400 to-sweet-300',
  },
  {
    id: 'phutu-pap',
    category: 'hearty',
    name: 'Phutu Pap + Tomato Gravy + Chuck Meat',
    description: 'A traditional South African favourite — slow-cooked chuck meat, phutu pap, and rich tomato gravy.',
    prices: [{ label: 'Portion', amount: 70 }],
    emoji: '🍲',
    color: 'from-orange-500 to-amber-400',
  },
  {
    id: 'steak-mash',
    category: 'hearty',
    name: 'Steak & Mash',
    description: 'Juicy steak served with creamy mash, pepper sauce, and roasted butternut. The ultimate comfort meal.',
    prices: [{ label: 'Portion', amount: 95 }],
    badge: 'bestseller',
    emoji: '🥩',
    color: 'from-red-600 to-cherry-500',
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Items', emoji: '🍽️' },
  { id: 'pasta', label: 'Pasta', emoji: '🍝' },
  { id: 'chicken', label: 'Chicken', emoji: '🍗' },
  { id: 'hearty', label: 'Hearty Meals', emoji: '🍲' },
];

export const BADGE_CONFIG: Record<string, { label: string; color: string }> = {
  bestseller: { label: 'Best Seller', color: 'bg-buttercup-400 text-gray-900' },
  popular: { label: 'Popular', color: 'bg-cherry-500 text-white' },
  veg: { label: 'Vegetarian', color: 'bg-green-500 text-white' },
  spicy: { label: 'Spicy!', color: 'bg-orange-500 text-white' },
  new: { label: 'New!', color: 'bg-lagoon-500 text-white' },
};
