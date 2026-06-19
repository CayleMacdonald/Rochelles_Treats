import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, Instagram, Facebook, MessageCircle, Music, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-cream-300">
      {/* Top wave */}
      <div className="h-16 bg-cream-100" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center shadow-md">
                <span className="font-display text-white text-lg font-medium italic">R</span>
              </div>
              <div>
                <span className="font-display text-cream-100 text-lg font-medium italic block leading-none">Rochelle's</span>
                <span className="font-accent text-[10px] font-semibold text-brand-300 tracking-[0.2em] uppercase block">Treats</span>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-cream-400/80 mb-6">
              Homemade comfort food made with love. Freshly prepared meals, hearty flavours, and warm hospitality.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: MessageCircle, href: 'https://wa.me/27814654641', label: 'WhatsApp', color: 'hover:bg-whatsapp-500 hover:text-white' },
                { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600 hover:text-white' },
                { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600 hover:text-white' },
                { icon: Music, href: '#', label: 'TikTok', color: 'hover:bg-cyan-600 hover:text-white' },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-full bg-brand-800 flex items-center justify-center text-cream-400 transition-all duration-300 hover:scale-110 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-cream-100 text-base font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/menu', label: 'Our Menu' },
                { to: '/about', label: 'About Us' },
                { to: '/menu', label: 'Order Online' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-body text-sm text-cream-400/80 hover:text-cream-100 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 group-hover:bg-cream-300 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-cream-100 text-base font-medium mb-5">Contact</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" strokeWidth={1.5} />
                <a href="mailto:rochellegalant4@gmail.com" className="font-body text-sm text-cream-400/80 hover:text-cream-100 transition-colors break-all">
                  rochellegalant4@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" strokeWidth={1.5} />
                <a href="tel:+27814654641" className="font-body text-sm text-cream-400/80 hover:text-cream-100 transition-colors">
                  081 465 4641
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" strokeWidth={1.5} />
                <span className="font-body text-sm text-cream-400/80">
                  Mon – Sun<br />10:00 AM – 7:00 PM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" strokeWidth={1.5} />
                <span className="font-body text-sm text-cream-400/80">
                  Collection & Delivery<br />Available
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-cream-100 text-base font-medium mb-5">Stay Updated</h3>
            <p className="font-body text-sm text-cream-400/80 mb-4">Get weekly specials and new menu items delivered to your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg bg-brand-800 border border-brand-700 px-4 py-2.5 text-sm text-cream-100 placeholder-brand-500 focus:outline-none focus:border-brand-500 transition-colors font-body"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-500 hover:bg-brand-400 text-cream-50 font-accent font-semibold text-sm py-2.5 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-brand-500">
            &copy; {year} Rochelle's Treats. All rights reserved.
          </p>
          <p className="font-body text-xs text-brand-500 italic">
            Delicious food, happy hearts
          </p>
        </div>
      </div>
    </footer>
  );
}
