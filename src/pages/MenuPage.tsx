import { useState, useMemo } from 'react';
import {
  ShoppingCart, MessageCircle, Plus, Minus, Heart, X, Star, Clock,
  FileText, Trash2, ArrowRight, ChevronDown
} from 'lucide-react';
import { MENU_ITEMS, CATEGORIES, BADGE_CONFIG, MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';
import {
  PastaIllustration, ChickenSchnitzelIllustration, CottagePieIllustration,
  WingsIllustration, ChickenBowlIllustration, SteakIllustration, DecorativeCircle
} from '../components/Illustrations';

const ILLUSTRATIONS: Record<string, React.FC<{ className?: string }>> = {
  'pasta-chicken': PastaIllustration,
  'pasta-mushroom': PastaIllustration,
  'chicken-schnitzel': ChickenSchnitzelIllustration,
  'chicken-bbq-wings': WingsIllustration,
  'chicken-spicy-wings': WingsIllustration,
  'chicken-bowl': ChickenBowlIllustration,
  'cottage-pie': CottagePieIllustration,
  'phutu-pap': ChickenBowlIllustration,
  'steak-mash': SteakIllustration,
};

const DAILY_SPECIALS = [
  {
    name: 'Tuesday Pasta Day',
    desc: 'Buy any Regular Pasta, get a FREE drink!',
    badge: 'Tuesday',
  },
  {
    name: 'Weekend Family Combo',
    desc: '4 meals + 2 desserts from R280',
    badge: 'Weekend',
  },
];

function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(item.prices[0]);
  const [note, setNote] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [favorited, setFavorited] = useState(false);
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
    <div className="card-base overflow-hidden card-hover group flex flex-col">
      <div className="bg-gradient-to-b from-cream-50 to-white p-6 flex justify-center relative border-b border-cream-200/60">
        {item.badge && (
          <span className={`absolute top-4 right-4 text-[10px] font-accent font-bold px-3 py-1 rounded-full uppercase tracking-wider ${BADGE_CONFIG[item.badge].color}`}>
            {BADGE_CONFIG[item.badge].label}
          </span>
        )}
        <button
          onClick={() => setFavorited(!favorited)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label="Add to favorites"
        >
          <Heart className={`w-4 h-4 transition-all ${favorited ? 'fill-terracotta-500 text-terracotta-500' : 'text-gray-400'}`} strokeWidth={1.5} />
        </button>
        <Illustration className="w-32 h-28 group-hover:scale-105 transition-transform duration-500" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-medium text-brand-900 mb-2 leading-tight">{item.name}</h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed mb-4 flex-1">{item.description}</p>

        {item.prices.length > 1 ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.prices.map((p) => (
              <button
                key={p.label}
                onClick={() => setSelectedSize(p)}
                className={`text-xs font-accent font-semibold px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedSize.label === p.label
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'bg-brand-50 text-brand-600 hover:bg-brand-100'
                }`}
              >
                {p.label} &middot; R{p.amount}
              </button>
            ))}
          </div>
        ) : (
          <div className="font-accent font-bold text-brand-600 text-xl mb-4">R{item.prices[0].amount}</div>
        )}

        {showNote ? (
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. extra cheese, no onions, spicy please"
            className="w-full text-sm rounded-xl border border-cream-300 px-3 py-2.5 mb-3 resize-none focus:outline-none focus:border-brand-400 transition-colors font-body bg-cream-50/50"
            rows={2}
          />
        ) : (
          <button
            onClick={() => setShowNote(true)}
            className="flex items-center gap-1.5 text-xs font-accent font-medium text-gray-400 hover:text-brand-500 transition-colors mb-3"
          >
            <FileText className="w-3.5 h-3.5" strokeWidth={1.5} /> Add special request
          </button>
        )}

        <button
          onClick={handleAdd}
          className={`mt-auto w-full rounded-lg px-4 py-2.5 font-accent font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
            added ? 'bg-sage-500 text-white' : 'bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/20'
          }`}
        >
          {added ? (
            <>Added to cart</>
          ) : (
            <><Plus className="w-4 h-4" strokeWidth={2} /> Add to Cart &middot; R{selectedSize.amount}</>
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
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-50 shadow-2xl transition-transform duration-500 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 bg-brand-800 text-white">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
            <h2 className="font-display text-lg font-medium">Your Order</h2>
            <span className="text-xs font-accent font-medium bg-white/15 px-2.5 py-0.5 rounded-full">{items.length} items</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-4">
              <ShoppingCart className="w-7 h-7 text-brand-300" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-brand-900 font-medium mb-2">Your cart is empty</h3>
            <p className="font-body text-sm text-gray-500 mb-6">Add some delicious meals to get started.</p>
            <button onClick={onClose} className="btn-primary text-sm">
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="card-base p-3.5 flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-xl shrink-0">
                    {item.name.includes('Pasta') ? '🍝' :
                     item.name.includes('Wings') ? '🍖' :
                     item.name.includes('Schnitzel') ? '🍗' :
                     item.name.includes('Steak') ? '🥩' :
                     item.name.includes('Cottage') ? '🥧' :
                     item.name.includes('Pap') ? '🍲' :
                     item.name.includes('Bowl') ? '🥘' : '🍽️'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-accent font-semibold text-brand-900 text-sm leading-tight">{item.name}</h4>
                    {item.size && <p className="text-xs text-gray-400">{item.size}</p>}
                    {item.note && <p className="text-xs text-brand-500 italic mt-0.5">"{item.note}"</p>}
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="w-7 h-7 rounded-full bg-brand-50 hover:bg-brand-100 flex items-center justify-center text-brand-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={2} />
                        </button>
                        <span className="font-accent font-bold text-brand-900 text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="w-7 h-7 rounded-full bg-brand-50 hover:bg-brand-100 flex items-center justify-center text-brand-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                        </button>
                      </div>
                      <span className="font-accent font-bold text-brand-600">R{item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-terracotta-50 hover:text-terracotta-500 text-gray-400 flex items-center justify-center transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-cream-200 bg-white p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-accent font-semibold text-brand-900">Total</span>
                <span className="font-accent font-bold text-brand-600 text-2xl">R{total}</span>
              </div>
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" strokeWidth={1.5} /> Prepared fresh — collection/delivery arranged via WhatsApp
              </p>
              <button
                onClick={handleCheckout}
                disabled={submitting || submitted}
                className={`w-full rounded-lg px-5 py-3 font-accent font-semibold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                  submitted ? 'bg-sage-500' : 'bg-whatsapp-500 hover:bg-whatsapp-600 shadow-whatsapp-500/20'
                }`}
              >
                {submitted ? (
                  <>Order sent!</>
                ) : submitting ? (
                  <>Preparing...</>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" strokeWidth={2} /> Checkout via WhatsApp
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
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <DecorativeCircle className="absolute top-10 left-10 w-40 h-40" />
          <DecorativeCircle className="absolute bottom-10 right-10 w-32 h-32" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center text-white">
          <span className="font-accent text-brand-300 font-semibold text-xs tracking-[0.2em] uppercase">Today's Menu</span>
          <h1 className="font-display text-4xl sm:text-5xl font-medium mt-3 mb-4">Our Menu</h1>
          <p className="font-body text-brand-200/80 max-w-lg mx-auto leading-relaxed">
            Fresh, homemade meals prepared daily with quality ingredients. Choose your favourite and order.
          </p>
        </div>
      </section>

      {/* Daily specials */}
      <section className="bg-cream-50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DAILY_SPECIALS.map((special) => (
              <div
                key={special.name}
                className="bg-gradient-to-r from-terracotta-500 to-terracotta-400 rounded-xl p-4 flex items-center gap-3 shadow-md"
              >
                <Star className="w-6 h-6 text-white fill-white shrink-0" strokeWidth={1.5} />
                <div className="flex-1 text-white">
                  <h3 className="font-display text-sm font-medium leading-tight">{special.name}</h3>
                  <p className="font-body text-xs text-white/85">{special.desc}</p>
                </div>
                <span className="text-[10px] font-accent font-semibold text-white bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {special.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-cream-50 sticky top-16 z-30 py-4 shadow-sm shadow-black/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-accent font-medium text-sm whitespace-nowrap transition-all shrink-0 ${
                  active === cat.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                    : 'bg-white text-gray-600 hover:text-brand-600 shadow-sm'
                }`}
              >
                <span className="text-base">{cat.emoji}</span> {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu grid */}
      <section className="bg-cream-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Allergy disclaimer */}
          <div className="mt-10 card-base bg-cream-100 border border-cream-200 p-5 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-accent font-semibold text-brand-900 text-sm mb-1">Food Allergy Disclaimer</h4>
              <p className="font-body text-xs text-gray-500 leading-relaxed">
                Our meals may contain or come into contact with common allergens including dairy, gluten, eggs, nuts, and soy. Please inform us of any allergies when placing your order so we can advise you accordingly.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <span className="font-accent text-brand-500 font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-brand-900 mt-2">Frequently Asked Questions</h2>
            </div>
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
                  <summary className="font-accent font-semibold text-brand-900 text-sm flex items-center justify-between list-none">
                    {q}
                    <ChevronDown className="w-4 h-4 text-brand-400 group-open:rotate-180 transition-transform shrink-0 ml-2" strokeWidth={1.5} />
                  </summary>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mt-3">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating cart button */}
      {itemCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 left-5 z-40 flex items-center gap-2.5 rounded-full bg-brand-600 text-white px-5 py-3 shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-colors animate-scale-in"
        >
          <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-accent font-semibold text-sm">View Cart ({itemCount})</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </button>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
