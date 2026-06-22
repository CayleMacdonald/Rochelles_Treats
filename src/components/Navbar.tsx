import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { items } = useCart();
  const location = useLocation();
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/95 backdrop-blur-md shadow-sm shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-cerise-500 flex items-center justify-center shadow-md shadow-cerise-500/20 group-hover:scale-105 transition-transform duration-300">
                <span className="font-script text-white text-2xl leading-none -mt-1">R</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold-400" />
            </div>
            <div className="leading-tight">
              <span className="font-display text-ink-100 text-base font-medium italic block tracking-tight">Rochelle's Treats</span>
              <span className="font-accent text-[9px] font-semibold text-gold-400 tracking-[0.25em] uppercase block -mt-0.5">Catering</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 font-accent font-medium text-sm transition-colors duration-300 ${
                  isActive(link.to)
                    ? 'text-cerise-400'
                    : 'text-ink-300 hover:text-cerise-400'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-cerise-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/menu"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-ink-800/50 hover:bg-ink-800 transition-colors duration-300"
              aria-label="View cart"
            >
              <ShoppingCart className="w-[18px] h-[18px] text-ink-200" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-cerise-500 text-white text-[10px] font-accent font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link
              to="/menu"
              className="hidden sm:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              Order Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-ink-800/50 hover:bg-ink-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-ink-200" /> : <Menu className="w-5 h-5 text-ink-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-ink-900/98 backdrop-blur-md border-t border-ink-800/60 px-4 py-5 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-xl font-accent font-medium transition-all ${
                isActive(link.to)
                  ? 'bg-cerise-500/10 text-cerise-400'
                  : 'text-ink-300 hover:text-cerise-400 hover:bg-ink-800/30'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/menu" className="block text-center btn-primary mt-3 text-sm">
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
