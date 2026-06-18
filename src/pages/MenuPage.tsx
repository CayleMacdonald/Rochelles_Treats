import { useState, useMemo } from 'react';
import { ShoppingCart, MessageCircle, Plus, Minus, Heart, X, Star, Clock, FileText, Trash2, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES, BADGE_CONFIG, MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';
import {
  PastaIllustration, ChickenIllustration, CottageIllustration,
  WingsIllustration, ChickenBowlIllustration, SteakIllustration, FloatingStar
} from '../components/Illustrations';

interface IllustrationMap { [key: string]: React.FC<{ className?: string }> }
const ILLUSTRATIONS: IllustrationMap = {
  'pasta-chicken': PastaIllustration,
  'pasta-mushroom': PastaIllustration,
  'chicken-schnitzel': ChickenIllustration,
  'chicken-bbq-wings': WingsIllustration,
  'chicken-spicy-wings': WingsIllustration,
  'chicken-bowl': ChickenBowlIllustration,
  'cottage-pie': CottageIllustration,
  'phutu-pap': ChickenBowlIllustration,
  'steak-mash': SteakIllustration,
};

const DAILY_SPECIALS = [
  {
    name: 'Tuesday Pasta Day',
    desc: 'Buy any Regular Pasta, get FREE drink!',
    badge: 'Tuesday',
    color: 'from-buttercup-400 to-buttercup-300',
  },
  {
    name: 'Weekend Family Combo',
    desc: '4 meals + 2 desserts from R280',
    badge: 'Weekend',
    color: 'from-sweet-400 to-cherry-400',
  },
];

function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(item.prices[0]);
  const [note, setNote] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [added, setAdded] = useState(false);
  const Illustration = ILLUSTRATIONS[item.id] ?? PastaIllustration;

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: selectedSize.amount,
      size: selectedSize.label,
      note: showNote && note ? note : undefined,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="card-base overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className={`bg-gradient-to-br ${item.color} bg-opacity-10 p-5 flex justify-center relative`}>
        {item.badge && (
          <span className={`absolute top-3 right-3 text-xs font-display font-bold px-2.5 py-1 rounded-full ${BADGE_CONFIG[item.badge].color} shadow-md`}>
            {BADGE_CONFIG[item.badge].label}
          </span>
        )}
        <button
          onClick={() => setFavorites(!favorites)}
          className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className={`w-4 h-4 transition-all ${favorites ? 'fill-sweet-500 text-sweet-500' : 'text-gray-400'}`} />
        </button>
        <Illustration className="w-32 h-28 group-hover:scale-105 transition-transform duration-500" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-gray-800 mb-1.5 leading-tight">{item.name}</h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed mb-3 flex-1">{item.description}</p>

        {/* Size options */}
        {item.prices.length > 1 ? (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.prices.map((p) => (
              <button
                key={p.label}
                onClick={() => setSelectedSize(p)}
                className={`text-xs font-display font-semibold px-3 py-1.5 rounded-full transition-all ${
                  selectedSize.label === p.label
                    ? 'bg-sweet-500 text-white shadow-md'
                    : 'bg-sweet-50 text-sweet-600 hover:bg-sweet-100'
                }`}
              >
                {p.label} · R{p.amount}
              </button>
            ))}
          </div>
        ) : (
          <div className="font-display font-bold text-sweet-600 text-lg mb-3">R{item.prices[0].amount}</div>
        )}

        {/* Special request note */}
        {showNote ? (
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. extra cheese, no onions, spicy please"
            className="w-full text-sm rounded-xl border border-sweet-200 px-3 py-2 mb-2 resize-none focus:outline-none focus:border-sweet-400 transition-colors"
            rows={2}
          />
        ) : (
          <button
            onClick={() => setShowNote(true)}
            className="flex items-center gap-1.5 text-xs font-display font-semibold text-gray-400 hover:text-sweet-500 transition-colors mb-3"
          >
            <FileText className="w-3.5 h-3.5" /> Add special request
          </button>
        )}

        <button
          onClick={handleAdd}
          className={`mt-auto w-full rounded-full px-4 py-2.5 font-display font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
            added ? 'bg-green-500 text-white' : 'bg-sweet-500 text-white hover:bg-sweet-600 shadow-lg shadow-sweet-500/30'
          }`}
        >
          {added ? (
            <>Added!</>
          ) : (
            <><Plus className="w-4 h-4" /> Add to Cart · R{selectedSize.amount}</>
          )}
        </button>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) return;
    setSubmitting(true);
    const message = encodeURIComponent(
      `Hi Rochelle! I'd like to place this order:\n\n` +
        items
          .map(
            (i, idx) =>
              `${idx + 1}. ${i.name}${i.size ? ` (${i.size})` : ''} x${i.quantity} — R${i.price * i.quantity}` +
              (i.note ? `\n   Note: ${i.note}` : '')
          )
          .join('\n') +
        `\n\nTotal: R${total}\n\nThank you!`
    );
    // Simulate brief submission then open WhatsApp
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/27814654641?text=${message}`, '_blank');
      setTimeout(() => {
        setSubmitted(false);
        clearCart();
        onClose();
      }, 2000);
    }, 800);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-100 shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-sweet-500 to-cherry-500 text-white">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <h2 className="font-display font-bold text-lg">Your Order</h2>
            <span className="text-sm bg-white/20 px-2 py-0.5 rounded-full">{items.length} items</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-sweet-100 flex items-center justify-center mb-4">
              <ShoppingCart className="w-9 h-9 text-sweet-400" />
            </div>
            <h3 className="font-display font-bold text-gray-700 mb-2">Your cart is empty</h3>
            <p className="font-body text-sm text-gray-500 mb-5">Add some delicious meals to get started!</p>
            <button onClick={onClose} className="btn-primary text-sm">
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="card-base p-3 flex gap-3 items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sweet-100 flex items-center justify-center text-2xl shrink-0">
                    {item.name.includes('Pasta') ? '🍝' :
                     item.name.includes('Wings') ? '🍖' :
                     item.name.includes('Schnitzel') ? '🍗' :
                     item.name.includes('Steak') ? '🥩' :
                     item.name.includes('Cottage') ? '🥧' :
                     item.name.includes('Pap') ? '🍲' :
                     item.name.includes('Bowl') ? '🥘' : '🍽️'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-gray-800 text-sm leading-tight">{item.name}</h4>
                    {item.size && <p className="text-xs text-gray-400">{item.size}</p>}
                    {item.note && <p className="text-xs text-sweet-500 italic mt-0.5">"{item.note}"</p>}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="w-7 h-7 rounded-full bg-sweet-50 hover:bg-sweet-100 flex items-center justify-center text-sweet-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-display font-bold text-gray-700 text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="w-7 h-7 rounded-full bg-sweet-50 hover:bg-sweet-100 flex items-center justify-center text-sweet-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-display font-bold text-sweet-600">R{item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-cherry-50 hover:text-cherry-500 text-gray-400 flex items-center justify-center transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-sweet-100 bg-white p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-gray-700">Total:</span>
                <span className="font-display font-bold text-sweet-600 text-2xl">R{total}</span>
              </div>
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Order prepared fresh — collection/delivery arranged via WhatsApp
              </p>
              <button
                onClick={handleCheckout}
                disabled={submitting || submitted}
                className={`w-full rounded-full px-5 py-3 font-display font-semibold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                  submitted ? 'bg-green-500' : 'bg-whatsapp-500 hover:bg-whatsapp-600 shadow-whatsapp-500/30'
                }`}
              >
                {submitted ? (
                  <>Order sent!</>
                ) : submitting ? (
                  <>Preparing...</>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" /> Checkout via WhatsApp
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default function MenuPage() {
  const [active, setActive] = useState('all');
  const [cartOpen, setCartOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const filtered = useMemo(() => {
    if (active === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter((m) => m.category === active);
  }, [active]);

  return (
    <div className="overflow-x-hidden pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-sweet-500 via-sweet-400 to-cherry-500 py-12 sm:py-16 relative overflow-hidden dotted-bg">
        <FloatingStar className="absolute top-8 left-6 w-8 h-8 animate-float-slow opacity-60" />
        <FloatingStar className="absolute bottom-6 right-8 w-10 h-10 animate-wiggle opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center text-white">
          <span className="font-display text-white/80 font-semibold text-sm tracking-widest uppercase">Today's Menu</span>
          <h1 className="font-heading text-4xl sm:text-5xl drop-shadow-md mt-2 mb-3">Our Delicious Menu</h1>
          <p className="font-body text-white/90 max-w-xl mx-auto">
            Fresh, homemade meals prepared daily with quality ingredients. Choose your favourite and order!
          </p>
        </div>
      </section>

      {/* Daily specials */}
      <section className="bg-cream-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DAILY_SPECIALS.map((special) => (
              <div
                key={special.name}
                className={`bg-gradient-to-r ${special.color} rounded-2xl p-4 flex items-center gap-3 shadow-md`}
              >
                <Star className="w-7 h-7 text-white fill-white shrink-0" />
                <div className="flex-1 text-white">
                  <h3 className="font-display font-bold text-sm leading-tight">{special.name}</h3>
                  <p className="font-body text-xs text-white/85">{special.desc}</p>
                </div>
                <span className="text-xs font-display font-semibold text-white bg-white/20 px-2 py-1 rounded-full">
                  {special.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-cream-100 sticky top-16 z-30 py-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm whitespace-nowrap transition-all shrink-0 ${
                  active === cat.id
                    ? 'bg-sweet-500 text-white shadow-lg shadow-sweet-500/30 scale-105'
                    : 'bg-white text-gray-600 hover:bg-sweet-50 shadow-sm'
                }`}
              >
                <span className="text-base">{cat.emoji}</span> {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu grid */}
      <section className="bg-cream-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Allergy disclaimer */}
          <div className="mt-10 card-base bg-buttercup-50 border-2 border-buttercup-200 p-5 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-buttercup-400 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-gray-900" />
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-800 text-sm mb-1">Food Allergy Disclaimer</h4>
              <p className="font-body text-xs text-gray-600 leading-relaxed">
                Our meals may contain or come into contact with common allergens including dairy, gluten, eggs, nuts, and soy. Please inform us of any allergies when placing your order so we can advise you accordingly.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: 'Do you offer delivery?', a: 'Yes! We offer both delivery and collection. Delivery fees depend on your location — send us a WhatsApp to confirm.' },
                { q: 'How fresh is the food?', a: 'Every meal is prepared fresh to order. We never use pre-packaged or frozen meals.' },
                { q: 'Can I place a special order?', a: 'Absolutely! Custom orders, catering, and event meals are available on request. Just WhatsApp us with the details.' },
                { q: 'What are your business hours?', a: 'We operate Monday to Sunday, 10:00 AM to 7:00 PM. Orders placed outside these hours will be handled the next day.' },
                { q: 'Do you have vegetarian options?', a: 'Yes — our Creamy Garlic Mushroom Pasta is vegetarian and we can adjust certain dishes to suit your needs.' },
                { q: 'How do I pay?', a: 'Payment is arranged via WhatsApp. We accept EFT and cash on delivery/collection.' },
              ].map(({ q, a }, i) => (
                <details key={i} className="card-base group p-4 cursor-pointer">
                  <summary className="font-display font-semibold text-gray-800 flex items-center justify-between list-none">
                    {q}
                    <Plus className="w-4 h-4 text-sweet-500 group-open:rotate-45 transition-transform shrink-0 ml-2" />
                  </summary>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mt-2">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating cart button (mobile/tablet) */}
      {itemCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 left-5 z-40 flex items-center gap-2 rounded-full bg-sweet-500 text-white px-5 py-3 shadow-xl shadow-sweet-500/40 hover:bg-sweet-600 transition-colors animate-pop"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="font-display font-semibold text-sm">View Cart ({itemCount})</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}

      <button
        onClick={() => setCartOpen(true)}
        className="hidden lg:block fixed bottom-6 left-5 z-40 rounded-full bg-sweet-500 text-white px-4 py-2.5 shadow-lg shadow-sweet-500/30 hover:bg-sweet-600 transition-colors items-center gap-2"
        style={{ display: items.length > 0 ? 'flex' : 'none' }}
      >
        <ShoppingCart className="w-5 h-5" />
        <span className="font-display font-semibold text-sm">{itemCount}</span>
      </button>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
