import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { items } = useCart();
  const location = useLocation();
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-sweet-900/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sweet-400 to-sweet-600 flex items-center justify-center shadow-lg shadow-sweet-500/30 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="leading-tight">
              <span className="font-heading text-sweet-600 text-lg block leading-none">Rochelle's</span>
              <span className="font-display text-xs font-semibold text-sweet-400 tracking-widest uppercase block">Treats</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full font-display font-semibold text-sm transition-all duration-200 ${
                  isActive(link.to)
                    ? 'bg-sweet-100 text-sweet-600'
                    : 'text-gray-600 hover:text-sweet-600 hover:bg-sweet-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              to="/menu"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-sweet-50 hover:bg-sweet-100 transition-colors"
              aria-label="View cart"
            >
              <ShoppingCart className="w-5 h-5 text-sweet-600" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-cherry-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pop">
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
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-sweet-50 hover:bg-sweet-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-sweet-600" /> : <Menu className="w-5 h-5 text-sweet-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-sweet-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-2xl font-display font-semibold transition-all ${
                isActive(link.to)
                  ? 'bg-sweet-100 text-sweet-600'
                  : 'text-gray-600 hover:text-sweet-600 hover:bg-sweet-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/menu"
            className="block text-center btn-primary mt-2"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
