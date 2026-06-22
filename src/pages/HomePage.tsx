import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, MessageCircle, UtensilsCrossed, Truck, Heart,
  ChefHat, Star, ArrowRight, Quote, Clock, Award
} from 'lucide-react';
import {
  HeroIllustration, PastaIllustration, ChickenSchnitzelIllustration,
  CottagePieIllustration, SteakIllustration, DecorativeCircle
} from '../components/Illustrations';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

const FEATURES = [
  { icon: UtensilsCrossed, title: 'Freshly Prepared', desc: 'Everything made with care and quality ingredients, never pre-packaged.', delay: 0 },
  { icon: Truck, title: 'Delivery & Collection', desc: 'Convenient ordering with flexible pickup or delivery options.', delay: 100 },
  { icon: Heart, title: 'Made With Passion', desc: 'Over 5 years of culinary experience in every dish we serve.', delay: 200 },
  { icon: ChefHat, title: 'Catering Expertise', desc: 'Skilled in home-style cooking for individuals and events.', delay: 300 },
  { icon: Star, title: 'Trusted Local Business', desc: 'Serving happy customers in the community for over a year.', delay: 400 },
  { icon: Clock, title: 'Fresh Daily', desc: 'Prepared to order, so every meal arrives at its best.', delay: 500 },
];

const SPECIALS = [
  {
    id: 'pasta-chicken',
    name: 'Creamy Cheesy Chicken Pasta',
    desc: 'Rich, creamy, cheesy goodness with tender chicken.',
    price: 'From R55',
    badge: 'Best Seller',
    Illustration: PastaIllustration,
    delay: 0,
  },
  {
    id: 'chicken-schnitzel',
    name: 'Chicken Schnitzel & Pepper Sauce',
    desc: 'Golden crispy schnitzel with your choice of sides.',
    price: 'R75',
    badge: 'Popular',
    Illustration: ChickenSchnitzelIllustration,
    delay: 100,
  },
  {
    id: 'cottage-pie',
    name: 'Cheesy Cottage Pie',
    desc: 'Savory mince, creamy mash, golden melted cheese.',
    price: 'R65',
    Illustration: CottagePieIllustration,
    delay: 200,
  },
  {
    id: 'steak-mash',
    name: 'Steak & Mash',
    desc: 'Served with pepper sauce and roasted butternut.',
    price: 'R95',
    badge: 'Best Seller',
    Illustration: SteakIllustration,
    delay: 300,
  },
];

const HOW_STEPS = [
  { step: '01', title: 'Browse Menu', desc: 'Explore our menu and choose your favourites.', icon: UtensilsCrossed },
  { step: '02', title: 'Place Order', desc: 'Add items to your cart and confirm online.', icon: ShoppingCart },
  { step: '03', title: 'Choose Method', desc: 'Pick collection or delivery — whatever suits.', icon: Truck },
  { step: '04', title: 'Enjoy', desc: 'Sit back and savour your homemade meal.', icon: Heart },
];

const TESTIMONIALS = [
  { text: 'Absolutely delicious and always fresh! The portions are generous and the flavours are incredible.', author: 'Sarah M.', role: 'Regular Customer' },
  { text: 'The cheesy pasta is incredible! I order it every week — it never disappoints.', author: 'Thabo K.', role: 'Regular Customer' },
  { text: 'Great portions, friendly service, and always on time. Rochelle really cares about quality!', author: 'Aisha N.', role: 'Regular Customer' },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-ink-900">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 overflow-hidden">
        <DecorativeCircle className="absolute top-20 right-1/4 w-32 h-32 opacity-20" />
        <DecorativeCircle className="absolute bottom-24 left-1/4 w-24 h-24 opacity-15" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-cerise-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-xs font-accent font-semibold text-cerise-400 tracking-wide uppercase border border-cerise-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cerise-400 animate-pulse" />
                Now Taking Orders
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-ink-100 leading-[1.1] mb-6">
                Homemade Comfort Food<br />
                <span className="italic text-cerise-400">Made With Love</span>
              </h1>
              <p className="font-body text-base sm:text-lg text-ink-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                From creamy pasta dishes to hearty home-cooked meals, Rochelle's Treats Catering brings delicious food straight to your table.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link to="/menu" className="btn-primary shadow-cerise-500/20">
                  <ShoppingCart className="w-4 h-4" strokeWidth={2} /> Order Now
                </Link>
                <a
                  href="https://wa.me/27814654641?text=Hi%20Rochelle!%20I%27d%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2} /> WhatsApp Us
                </a>
                <Link to="/menu" className="btn-ghost">
                  <UtensilsCrossed className="w-4 h-4" strokeWidth={1.5} /> View Menu
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute inset-0 rounded-full bg-cerise-500/5 blur-3xl scale-90" />
                <HeroIllustration className="relative w-full drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <RevealSection className="section-pad bg-ink-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">Why Choose Us</span>
            <div className="divider-line mx-auto mt-3 mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink-100">Why Customers Love Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc, delay }) => (
              <RevealSection key={title} delay={delay} className="card-base p-7 card-hover flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-cerise-500/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-cerise-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink-100 mb-1.5">{title}</h3>
                  <p className="font-body text-sm text-ink-500 leading-relaxed">{desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Featured Specials */}
      <RevealSection className="section-pad bg-gradient-to-b from-ink-900 to-ink-800">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">Featured Specials</span>
            <div className="divider-line mx-auto mt-3 mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink-100">Must-Try Dishes</h2>
            <p className="font-body text-ink-500 mt-3 max-w-md mx-auto">Our most-loved meals, made fresh daily with quality ingredients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SPECIALS.map(({ id, name, desc, price, badge, Illustration, delay }) => (
              <RevealSection key={id} delay={delay} className="card-base overflow-hidden card-hover group">
                <div className="bg-gradient-to-b from-ink-800/50 to-ink-900/30 p-6 flex justify-center relative border-b border-ink-800/40">
                  {badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-accent font-bold px-3 py-1 rounded-full bg-gold-500 text-ink-900 uppercase tracking-wider">
                      {badge}
                    </span>
                  )}
                  <Illustration className="w-36 h-28 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-medium text-ink-100 mb-2 leading-tight">{name}</h3>
                  <p className="font-body text-sm text-ink-500 mb-4">{desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-accent font-bold text-cerise-400 text-lg">{price}</span>
                    <Link
                      to="/menu"
                      className="flex items-center gap-1 text-sm font-accent font-medium text-cerise-400 hover:text-cerise-300 transition-colors"
                    >
                      Order <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary text-base px-8 py-3.5">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* How It Works */}
      <RevealSection className="section-pad bg-ink-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <DecorativeCircle className="w-full h-full" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">How It Works</span>
            <div className="divider-line mx-auto mt-3 mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink-100">Simple & Easy Ordering</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_STEPS.map(({ step, title, desc, icon: Icon }, i) => (
              <RevealSection key={step} delay={i * 100} className="text-center relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-ink-800" />
                )}
                <div className="w-20 h-20 rounded-2xl bg-ink-800/50 border border-ink-700/50 flex items-center justify-center mx-auto mb-5 relative">
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cerise-500 text-white text-[10px] font-accent font-bold flex items-center justify-center">
                    {step}
                  </span>
                  <Icon className="w-6 h-6 text-cerise-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-medium text-ink-100 mb-2">{title}</h3>
                <p className="font-body text-sm text-ink-500 leading-relaxed">{desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Testimonials */}
      <RevealSection className="section-pad bg-gradient-to-b from-ink-800 to-ink-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">Reviews</span>
            <div className="divider-line mx-auto mt-3 mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink-100">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ text, author, role }, i) => (
              <RevealSection key={author} delay={i * 120} className="card-base p-8 relative">
                <Quote className="w-8 h-8 text-cerise-500/20 mb-4" strokeWidth={1} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" strokeWidth={1} />
                  ))}
                </div>
                <p className="font-body text-ink-400 leading-relaxed italic mb-6">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cerise-500/10 flex items-center justify-center text-cerise-400 font-accent font-bold text-sm">
                    {author[0]}
                  </div>
                  <div>
                    <div className="font-accent font-semibold text-ink-200 text-sm">{author}</div>
                    <div className="font-body text-xs text-ink-600">{role}</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CTA Banner */}
      <RevealSection className="section-pad bg-ink-900">
        <div className="mx-auto max-w-4xl">
          <div className="card-base bg-gradient-to-br from-ink-800 to-ink-900 p-10 sm:p-14 text-center text-white relative overflow-hidden border border-ink-700/50">
            <DecorativeCircle className="absolute -top-12 -right-12 w-48 h-48 opacity-10" />
            <DecorativeCircle className="absolute -bottom-8 -left-8 w-32 h-32 opacity-10" />
            <div className="relative z-10">
              <Award className="w-10 h-10 mx-auto mb-5 text-gold-400" strokeWidth={1.5} />
              <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4 text-ink-100">Ready to Order?</h2>
              <p className="font-body text-ink-400 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                Place your order online or chat with us on WhatsApp — we're always happy to help.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/menu" className="btn-primary bg-cerise-500 text-white hover:bg-cerise-600 shadow-xl text-base px-7 py-3.5">
                  <ShoppingCart className="w-5 h-5" strokeWidth={2} /> Order Now
                </Link>
                <a
                  href="https://wa.me/27814654641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-base px-7 py-3.5 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2} /> Chat With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
