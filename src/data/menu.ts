export interface MenuItem {
  id: string;
  category: 'breakfast' | 'pasta' | 'chicken' | 'stews' | 'wings' | 'platters' | 'combos' | 'sides';
  name: string;
  description: string;
  prices: { label: string; amount: number }[];
  badge?: 'bestseller' | 'popular' | 'veg' | 'spicy' | 'new';
  image: string;
  note?: string;
}

const P = (id: number, w = 400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const MENU_ITEMS: MenuItem[] = [
  // ── BREAKFAST PLATTERS ──────────────────────────────────────────────────────
  {
    id: 'breakfast-small',
    category: 'breakfast',
    name: 'Small Breakfast Platter',
    description: 'Serves 4–6 people. Includes scrambled eggs, mini sausages, croissants, muffins & juice.',
    prices: [{ label: 'Platter', amount: 450 }],
    badge: 'popular',
    image: P(103124),
  },
  {
    id: 'breakfast-medium',
    category: 'breakfast',
    name: 'Medium Breakfast Platter',
    description: 'Serves 8–10 people. Scrambled eggs, beef/chicken sausages, bacon, croissants, mini sandwiches, muffins & juice.',
    prices: [{ label: 'Platter', amount: 700 }],
    badge: 'bestseller',
    image: P(1640775),
  },
  {
    id: 'breakfast-large',
    category: 'breakfast',
    name: 'Large Breakfast Platter',
    description: 'Serves 12–15 people. Scrambled eggs, sausages, bacon, croissants, mini sandwiches, muffins, fresh fruit, yogurt & juice.',
    prices: [{ label: 'Platter', amount: 1200 }],
    image: P(1640776),
  },

  // ── PASTAS ──────────────────────────────────────────────────────────────────
  {
    id: 'pasta-chicken',
    category: 'pasta',
    name: 'Creamy Chicken Pasta',
    description: 'Rich creamy pasta loaded with tender chicken. A true crowd-favourite, made fresh daily.',
    prices: [
      { label: 'Medium', amount: 150 },
      { label: 'Large', amount: 300 },
    ],
    badge: 'bestseller',
    image: P(1279330),
  },
  {
    id: 'pasta-mushroom',
    category: 'pasta',
    name: 'Creamy Garlic & Mushroom Pasta',
    description: 'Silky garlic mushroom cream sauce. Vegetarian-friendly — add spinach for just R20 extra.',
    prices: [
      { label: 'Medium', amount: 150 },
      { label: 'Large', amount: 260 },
    ],
    badge: 'veg',
    image: P(1437267),
    note: 'Add spinach +R20',
  },
  {
    id: 'pasta-spaghetti',
    category: 'pasta',
    name: 'Spaghetti Bolognaise',
    description: 'Classic slow-cooked beef mince bolognaise sauce over perfectly cooked spaghetti.',
    prices: [
      { label: 'Medium', amount: 150 },
      { label: 'Large', amount: 300 },
    ],
    image: P(1640777),
  },

  // ── CHICKEN MAINS ───────────────────────────────────────────────────────────
  {
    id: 'chicken-ala-king',
    category: 'chicken',
    name: 'Chicken Ala King',
    description: 'Tender chicken in a rich, creamy mushroom and pepper sauce. Pure homemade comfort.',
    prices: [
      { label: 'Medium', amount: 200 },
      { label: 'Large', amount: 300 },
    ],
    badge: 'popular',
    image: P(2338407),
  },
  {
    id: 'butter-chicken',
    category: 'chicken',
    name: 'Butter Chicken',
    description: 'Succulent chicken simmered in a mildly spiced, buttery tomato cream sauce.',
    prices: [
      { label: 'Medium', amount: 200 },
      { label: 'Large', amount: 350 },
    ],
    badge: 'popular',
    image: P(2474661),
  },

  // ── CURRIES, STEWS & MORE ────────────────────────────────────────────────────
  {
    id: 'chicken-curry',
    category: 'stews',
    name: 'Chicken Curry',
    description: 'Fragrant, spiced chicken curry slow-cooked for deep flavour. Served with rice.',
    prices: [
      { label: 'Medium', amount: 200 },
      { label: 'Large', amount: 300 },
    ],
    badge: 'spicy',
    image: P(2474661),
  },
  {
    id: 'chicken-stew',
    category: 'stews',
    name: 'Chicken Stew',
    description: 'Hearty homestyle chicken stew with vegetables. Wholesome, warming, and satisfying.',
    prices: [
      { label: 'Medium', amount: 150 },
      { label: 'Large', amount: 300 },
    ],
    image: P(1640774),
  },
  {
    id: 'beef-stew',
    category: 'stews',
    name: 'Beef Stew',
    description: 'Slow-cooked tender beef stew with rich gravy. A true South African staple.',
    prices: [
      { label: 'Medium', amount: 200 },
      { label: 'Large', amount: 350 },
    ],
    badge: 'bestseller',
    image: P(45247),
  },

  // ── CHICKEN WINGS ───────────────────────────────────────────────────────────
  {
    id: 'chicken-wings',
    category: 'wings',
    name: 'Chicken Wings',
    description: 'Crispy, golden chicken wings seasoned to perfection. Great for sharing or solo indulgence.',
    prices: [
      { label: '12 Wings', amount: 150 },
      { label: '24 Wings', amount: 300 },
    ],
    badge: 'popular',
    image: P(60616),
  },

  // ── PLATTERS ────────────────────────────────────────────────────────────────
  {
    id: 'cottage-pie',
    category: 'platters',
    name: 'Cottage Pie Tray',
    description: 'Savoury mince topped with creamy mashed potato and golden cheese. Comes with a Garden Salad.',
    prices: [
      { label: 'Medium', amount: 300 },
      { label: 'Large', amount: 500 },
    ],
    image: P(1435706),
  },
  {
    id: 'toasted-platter',
    category: 'platters',
    name: 'Toasted Platter',
    description: 'Golden toasted sandwiches, quartered. Includes Plain Cheese, Ham & Cheese, and Cheese & Tomato.',
    prices: [
      { label: '10 Quarters', amount: 200 },
      { label: '20 Quarters', amount: 350 },
      { label: '30 Quarters', amount: 500 },
    ],
    image: P(1639557),
  },
  {
    id: 'meaty-platter',
    category: 'platters',
    name: 'Meaty Delight Platter',
    description: 'Hearty toasted quarters packed with Chicken & Mayo, Bacon, and Egg & Cheese fillings.',
    prices: [
      { label: '10 Quarters', amount: 250 },
      { label: '20 Quarters', amount: 450 },
      { label: '30 Quarters', amount: 650 },
    ],
    badge: 'popular',
    image: P(2098085),
  },

  // ── COMBO FAMILY TRAYS ──────────────────────────────────────────────────────
  {
    id: 'combo-1',
    category: 'combos',
    name: 'Combo 1 — Roast Chicken',
    description: 'Roast Chicken · Savory Rice · Butternut · Creamed Spinach. The ultimate family tray.',
    prices: [{ label: 'Family Tray', amount: 500 }],
    badge: 'bestseller',
    image: P(1640771),
  },
  {
    id: 'combo-2',
    category: 'combos',
    name: 'Combo 2 — Chicken Curry',
    description: 'Chicken Curry · Rice · Butternut · Garden Salad. Spiced and satisfying.',
    prices: [{ label: 'Family Tray', amount: 500 }],
    image: P(2474661),
  },
  {
    id: 'combo-3',
    category: 'combos',
    name: 'Combo 3 — Chicken Stew',
    description: 'Chicken Stew · Rice · Mixed Vegetables · Garden Salad. Comfort in every bite.',
    prices: [{ label: 'Family Tray', amount: 550 }],
    image: P(1640774),
  },
  {
    id: 'combo-4',
    category: 'combos',
    name: 'Combo 4 — Beef Stew',
    description: 'Beef Stew · Phutu Pap · Mixed Vegetables · Garden Salad. A South African classic.',
    prices: [{ label: 'Family Tray', amount: 450 }],
    image: P(45247),
  },
  {
    id: 'combo-5',
    category: 'combos',
    name: 'Combo 5 — Chicken Ala King',
    description: 'Chicken Ala King · Rice or Pasta · Mixed Vegetables · Garden Salad.',
    prices: [{ label: 'Family Tray', amount: 550 }],
    image: P(2338407),
  },
  {
    id: 'combo-6',
    category: 'combos',
    name: 'Combo 6 — Butter Chicken',
    description: 'Butter Chicken · Basmati Rice · Mixed Vegetables · Garden Salad. Rich and aromatic.',
    prices: [{ label: 'Family Tray', amount: 500 }],
    image: P(2474661),
  },

  // ── SIDES ───────────────────────────────────────────────────────────────────
  {
    id: 'side-salad',
    category: 'sides',
    name: 'Garden Salad',
    description: 'Fresh garden salad with crisp vegetables. Light, colourful, and refreshing.',
    prices: [
      { label: 'Small', amount: 50 },
      { label: 'Medium', amount: 80 },
      { label: 'Large', amount: 150 },
    ],
    badge: 'veg',
    image: P(1640769),
  },
  {
    id: 'side-rice',
    category: 'sides',
    name: 'Savory Rice',
    description: 'Fluffy, perfectly seasoned savoury rice. The ideal side for any main.',
    prices: [
      { label: 'Small', amount: 40 },
      { label: 'Medium', amount: 70 },
      { label: 'Large', amount: 150 },
    ],
    image: P(1340116),
  },
  {
    id: 'side-spinach',
    category: 'sides',
    name: 'Creamed Spinach',
    description: 'Rich and creamy spinach, slow-cooked with butter. A classic comfort side dish.',
    prices: [
      { label: 'Small', amount: 40 },
      { label: 'Medium', amount: 70 },
      { label: 'Large', amount: 150 },
    ],
    badge: 'veg',
    image: P(2255903),
  },
  {
    id: 'side-butternut',
    category: 'sides',
    name: 'Butternut',
    description: 'Sweet, soft roasted or steamed butternut. Naturally delicious and nourishing.',
    prices: [
      { label: 'Small', amount: 40 },
      { label: 'Medium', amount: 70 },
      { label: 'Large', amount: 150 },
    ],
    badge: 'veg',
    image: P(1408199),
  },
  {
    id: 'side-dumplings',
    category: 'sides',
    name: 'Dumplings',
    description: 'Soft, fluffy homemade dumplings. R30 per portion — perfect with any stew.',
    prices: [{ label: 'Per Portion', amount: 30 }],
    image: P(955137),
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Items', emoji: '🍽️' },
  { id: 'breakfast', label: 'Breakfast Platters', emoji: '🍳' },
  { id: 'pasta', label: 'Pastas', emoji: '🍝' },
  { id: 'chicken', label: 'Chicken Mains', emoji: '🍗' },
  { id: 'stews', label: 'Curries & Stews', emoji: '🥘' },
  { id: 'wings', label: 'Chicken Wings', emoji: '🍖' },
  { id: 'platters', label: 'Platters', emoji: '🥡' },
  { id: 'combos', label: 'Family Combos', emoji: '🍱' },
  { id: 'sides', label: 'Sides', emoji: '🥗' },
];

export const BADGE_CONFIG: Record<string, { label: string; color: string }> = {
  bestseller: { label: 'Best Seller', color: 'bg-gold-500 text-ink-900' },
  popular: { label: 'Popular', color: 'bg-cerise-500 text-white' },
  veg: { label: 'Vegetarian', color: 'bg-ink-600 text-ink-200' },
  spicy: { label: 'Spicy!', color: 'bg-cerise-700 text-white' },
  new: { label: 'New!', color: 'bg-gold-400 text-ink-900' },
};
