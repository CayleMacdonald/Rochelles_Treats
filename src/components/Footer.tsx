import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, Instagram, Facebook, MessageCircle, Music, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 border-t border-ink-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-cerise-500 flex items-center justify-center shadow-md shadow-cerise-500/20">
                <span className="font-script text-white text-2xl leading-none -mt-1">R</span>
              </div>
              <div>
                <span className="font-display text-ink-100 text-base font-medium italic block leading-none">Rochelle's Treats</span>
                <span className="font-accent text-[9px] font-semibold text-gold-400 tracking-[0.25em] uppercase block">Catering</span>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-ink-500 mb-6">
              Homemade comfort food made with love. Freshly prepared meals, hearty flavours, and warm hospitality for every occasion.
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
                  className={`w-9 h-9 rounded-full bg-ink-800 flex items-center justify-center text-ink-400 transition-all duration-300 hover:scale-110 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-ink-100 text-base font-medium mb-5">Quick Links</h3>
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
                    className="font-body text-sm text-ink-500 hover:text-cerise-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cerise-500/40 group-hover:bg-cerise-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-ink-100 text-base font-medium mb-5">Contact</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-cerise-400 shrink-0" strokeWidth={1.5} />
                <a href="mailto:rochellegalant4@gmail.com" className="font-body text-sm text-ink-500 hover:text-cerise-400 transition-colors break-all">
                  rochellegalant4@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cerise-400 shrink-0" strokeWidth={1.5} />
                <a href="tel:+27814654641" className="font-body text-sm text-ink-500 hover:text-cerise-400 transition-colors">
                  081 465 4641
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-cerise-400 shrink-0" strokeWidth={1.5} />
                <span className="font-body text-sm text-ink-500">
                  Mon – Sun<br />10:00 AM – 7:00 PM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-cerise-400 shrink-0" strokeWidth={1.5} />
                <span className="font-body text-sm text-ink-500">
                  Collection & Delivery<br />Available
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-ink-100 text-base font-medium mb-5">Stay Updated</h3>
            <p className="font-body text-sm text-ink-500 mb-4">Get weekly specials and new menu items delivered to your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg bg-ink-800 border border-ink-700 px-4 py-2.5 text-sm text-ink-100 placeholder-ink-600 focus:outline-none focus:border-cerise-500 transition-colors font-body"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-cerise-500 hover:bg-cerise-600 text-white font-accent font-semibold text-sm py-2.5 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-800/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-ink-600">
            &copy; {year} Rochelle's Treats Catering. All rights reserved.
          </p>
          <p className="font-body text-xs text-ink-600 italic">
            Delicious food, happy hearts
          </p>
        </div>
      </div>
    </footer>
  );
}
