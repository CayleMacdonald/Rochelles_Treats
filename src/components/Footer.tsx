import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, Clock, Instagram, Facebook, MessageCircle, Music } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sweet-400 to-sweet-600 flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <span className="font-heading text-white text-lg block leading-none">Rochelle's</span>
                <span className="font-display text-xs font-semibold text-sweet-400 tracking-widest uppercase block">Treats</span>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-gray-400">
              Delicious Food, Happy Hearts! Homemade comfort food made with love and quality ingredients.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: MessageCircle, href: 'https://wa.me/27814654641', label: 'WhatsApp', color: 'hover:text-whatsapp-400' },
                { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
                { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
                { icon: Music, href: '#', label: 'TikTok', color: 'hover:text-cyan-400' },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-200 hover:bg-gray-700 ${color} hover:scale-110`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/menu', label: 'Menu' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/menu', label: 'Order Online' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-body text-sm text-gray-400 hover:text-sweet-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sweet-500/50 group-hover:bg-sweet-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-sweet-400 shrink-0" />
                <a href="mailto:rochellegalant4@gmail.com" className="font-body text-sm text-gray-400 hover:text-sweet-400 transition-colors break-all">
                  rochellegalant4@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sweet-400 shrink-0" />
                <a href="tel:+27814654641" className="font-body text-sm text-gray-400 hover:text-sweet-400 transition-colors">
                  081 465 4641
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-sweet-400 shrink-0" />
                <span className="font-body text-sm text-gray-400">
                  Mon – Sun<br />10:00 AM – 7:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Weekly Specials</h3>
            <p className="font-body text-sm text-gray-400 mb-4">Get updates on new items and specials directly to your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sweet-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-sweet-500 hover:bg-sweet-600 text-white font-display font-semibold text-sm py-2.5 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-gray-500">
            &copy; {year} Rochelle's Treats. All rights reserved.
          </p>
          <p className="font-body text-xs text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-sweet-500 fill-sweet-500" /> for happy hearts
          </p>
        </div>
      </div>
    </footer>
  );
}
