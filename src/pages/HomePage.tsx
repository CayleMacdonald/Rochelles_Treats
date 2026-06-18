import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, MessageCircle, UtensilsCrossed, Truck, Heart,
  ChefHat, Star, MapPin, ArrowRight, Quote
} from 'lucide-react';
import {
  HeroIllustration, FloatingCupcake, FloatingChilli, FloatingStar,
  FloatingDonut, PastaIllustration, ChickenIllustration, CottageIllustration,
  SteakIllustration
} from '../components/Illustrations';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); obs.disconnect(); } },
      { threshold: 0.12 }
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
  { icon: UtensilsCrossed, title: 'Freshly Prepared Meals', desc: 'Everything made with care and quality ingredients.', color: 'bg-sweet-100 text-sweet-600', delay: 0 },
  { icon: Truck, title: 'Collection & Delivery', desc: 'Convenient ordering and delivery options to your door.', color: 'bg-lagoon-100 text-lagoon-600', delay: 100 },
  { icon: Heart, title: 'Made With Passion', desc: 'Over 5 years of culinary experience in every bite.', color: 'bg-cherry-100 text-cherry-500', delay: 200 },
  { icon: ChefHat, title: 'Bakery Expertise', desc: 'Skilled in both savory meals and baked treats.', color: 'bg-buttercup-100 text-buttercup-600', delay: 300 },
  { icon: Star, title: 'Trusted Local Business', desc: 'Serving happy customers for over a year.', color: 'bg-orange-100 text-orange-500', delay: 400 },
  { icon: MapPin, title: 'Local & Community', desc: 'Proudly serving our local community with love.', color: 'bg-green-100 text-green-600', delay: 500 },
];

const SPECIALS = [
  {
    id: 'pasta-chicken',
    name: 'Creamy Cheesy Chicken Pasta',
    desc: 'Rich, creamy, cheesy goodness.',
    price: 'From R55',
    badge: 'Best Seller',
    Illustration: PastaIllustration,
    bg: 'from-buttercup-400/20 to-buttercup-300/10',
    accent: 'bg-buttercup-400 text-gray-900',
    delay: 0,
  },
  {
    id: 'chicken-schnitzel',
    name: 'Chicken Schnitzel & Pepper Sauce',
    desc: 'Golden crispy schnitzel with your choice of sides.',
    price: 'R75',
    badge: 'Popular',
    Illustration: ChickenIllustration,
    bg: 'from-cherry-400/20 to-sweet-300/10',
    accent: 'bg-cherry-500 text-white',
    delay: 100,
  },
  {
    id: 'cottage-pie',
    name: 'Cheesy Cottage Pie',
    desc: 'Savory mince, creamy mash, golden cheese.',
    price: 'R65',
    Illustration: CottageIllustration,
    bg: 'from-sweet-400/20 to-sweet-300/10',
    accent: '',
    delay: 200,
  },
  {
    id: 'steak-mash',
    name: 'Steak & Mash',
    desc: 'Served with pepper sauce and butternut.',
    price: 'R95',
    badge: 'Best Seller',
    Illustration: SteakIllustration,
    bg: 'from-red-400/20 to-cherry-300/10',
    accent: 'bg-buttercup-400 text-gray-900',
    delay: 300,
  },
];

const HOW_STEPS = [
  { step: '01', title: 'Browse Menu', desc: 'Explore our delicious menu and choose your favourites.', emoji: '🍽️', color: 'bg-sweet-100', border: 'border-sweet-300' },
  { step: '02', title: 'Place Order', desc: 'Add items to your cart and confirm your order online.', emoji: '🛒', color: 'bg-buttercup-100', border: 'border-buttercup-300' },
  { step: '03', title: 'Choose Method', desc: 'Pick collection or delivery — whatever suits you.', emoji: '🚚', color: 'bg-lagoon-100', border: 'border-lagoon-300' },
  { step: '04', title: 'Enjoy Food!', desc: 'Sit back, relax, and enjoy your delicious meal!', emoji: '❤️', color: 'bg-cherry-100', border: 'border-cherry-300' },
];

const TESTIMONIALS = [
  { text: 'Absolutely delicious and always fresh! The portions are generous and the flavours are incredible.', author: 'Sarah M.', stars: 5, color: 'bg-sweet-50 border-sweet-200' },
  { text: 'The cheesy pasta is incredible! I order it every week — it never disappoints.', author: 'Thabo K.', stars: 5, color: 'bg-buttercup-50 border-buttercup-200' },
  { text: 'Great portions, friendly service, and always on time. Rochelle really cares about her customers!', author: 'Aisha N.', stars: 5, color: 'bg-lagoon-50 border-lagoon-200' },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-sweet-500 via-sweet-400 to-cherry-500 overflow-hidden dotted-bg">
        {/* Floating decorations */}
        <FloatingStar className="absolute top-28 left-[5%] w-10 h-10 animate-float-slow opacity-80" />
        <FloatingCupcake className="absolute top-24 right-[8%] w-20 h-20 animate-float-med" />
        <FloatingChilli className="absolute bottom-32 left-[6%] w-12 h-16 animate-wiggle opacity-75" />
        <FloatingDonut className="absolute bottom-24 right-[6%] w-16 h-16 animate-float-fast" />
        <FloatingStar className="absolute top-1/2 left-[2%] w-8 h-8 animate-spin-slow opacity-50" />
        <FloatingStar className="absolute top-1/3 right-[3%] w-6 h-6 animate-float-slow opacity-60" />

        {/* Wavy bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-cream-100" style={{
          clipPath: 'ellipse(55% 100% at 50% 100%)',
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="text-white text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm font-display font-semibold text-white/90">
                <span className="w-2 h-2 rounded-full bg-whatsapp-400 animate-pulse" />
                Now Taking Orders!
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 drop-shadow-md">
                Homemade Comfort Food Made With Love
              </h1>
              <p className="font-body text-lg text-white/90 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                From creamy pasta dishes to hearty home-cooked meals and freshly baked treats, Rochelle's Treats brings delicious food straight to your table.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link to="/menu" className="btn-primary bg-white text-sweet-600 hover:bg-cream-100 shadow-xl">
                  <ShoppingCart className="w-4 h-4" /> Order Now
                </Link>
                <a
                  href="https://wa.me/27814654641?text=Hi%20Rochelle!%20I%27d%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <Link to="/menu" className="btn-outline border-white text-white hover:bg-white hover:text-sweet-600">
                  <UtensilsCrossed className="w-4 h-4" /> View Menu
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />
                <HeroIllustration className="relative w-full drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Love Us */}
      <RevealSection className="section-pad bg-cream-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="font-display text-sweet-500 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Why Customers Love Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, color, delay }) => (
              <RevealSection key={title} delay={delay} className="card-base p-6 flex items-start gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-800 mb-1">{title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Featured Specials */}
      <RevealSection className="section-pad bg-gradient-to-b from-white to-cream-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="font-display text-sweet-500 font-semibold text-sm tracking-widest uppercase">Featured Specials</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Must-Try Dishes</h2>
            <p className="font-body text-gray-500 mt-2 max-w-xl mx-auto">Our most-loved meals, made fresh daily with quality ingredients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SPECIALS.map(({ id, name, desc, price, badge, Illustration, bg, accent, delay }) => (
              <RevealSection key={id} delay={delay} className={`card-base overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                <div className={`bg-gradient-to-br ${bg} p-6 flex justify-center relative`}>
                  {badge && (
                    <span className={`absolute top-3 right-3 text-xs font-display font-bold px-2.5 py-1 rounded-full ${accent} animate-badge-glow`}>
                      {badge}
                    </span>
                  )}
                  <Illustration className="w-36 h-32 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-gray-800 mb-1 leading-tight">{name}</h3>
                  <p className="font-body text-sm text-gray-500 mb-3">{desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sweet-600 text-lg">{price}</span>
                    <Link
                      to={`/menu`}
                      className="flex items-center gap-1 text-sm font-display font-semibold text-sweet-500 hover:text-sweet-600 transition-colors"
                    >
                      Order <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="btn-primary text-base px-8 py-3.5">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* How It Works */}
      <RevealSection className="section-pad bg-gradient-to-br from-sweet-500 to-cherry-500 relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl text-white drop-shadow-md">How It Works</h2>
            <p className="font-body text-white/80 mt-3 max-w-md mx-auto">Ordering from Rochelle's Treats is simple and easy!</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_STEPS.map(({ step, title, desc, emoji, color, border }, i) => (
              <RevealSection key={step} delay={i * 100} className={`card-base p-5 text-center border-2 ${border} relative`}>
                <div className="absolute -top-3 left-4 bg-sweet-500 text-white font-display font-bold text-xs px-2 py-0.5 rounded-full">
                  Step {step}
                </div>
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-2xl mx-auto mb-3 mt-2`}>
                  {emoji}
                </div>
                <h3 className="font-display font-bold text-gray-800 mb-1.5 text-base">{title}</h3>
                <p className="font-body text-xs text-gray-500 leading-relaxed">{desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Testimonials */}
      <RevealSection className="section-pad bg-cream-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="font-display text-sweet-500 font-semibold text-sm tracking-widest uppercase">Reviews</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mt-2">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ text, author, stars, color }, i) => (
              <RevealSection key={author} delay={i * 120} className={`card-base p-6 border-2 ${color}`}>
                <Quote className="w-8 h-8 text-sweet-300 mb-3" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-buttercup-400 text-buttercup-400" />
                  ))}
                </div>
                <p className="font-body text-gray-600 leading-relaxed italic mb-4">"{text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sweet-200 flex items-center justify-center text-sweet-700 font-display font-bold text-sm">
                    {author[0]}
                  </div>
                  <span className="font-display font-semibold text-gray-700 text-sm">{author}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CTA Banner */}
      <RevealSection className="section-pad bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="card-base bg-gradient-to-br from-sweet-500 to-cherry-500 p-10 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 dotted-bg opacity-20" />
            <div className="relative z-10">
              <FloatingDonut className="w-16 h-16 mx-auto mb-4 animate-bounce-soft" />
              <h2 className="font-heading text-3xl sm:text-4xl drop-shadow-md mb-3">Ready to Order?</h2>
              <p className="font-body text-white/85 text-lg mb-7 max-w-md mx-auto">
                Place your order online or chat with us on WhatsApp — we're always happy to help!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/menu" className="btn-primary bg-white text-sweet-600 hover:bg-cream-100 shadow-xl text-base px-7 py-3.5">
                  <ShoppingCart className="w-5 h-5" /> Order Now
                </Link>
                <a
                  href="https://wa.me/27814654641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-7 py-3.5 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" /> Chat With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
