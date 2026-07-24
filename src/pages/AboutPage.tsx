import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MessageCircle, Clock, Truck, ShoppingBag, Calendar,
  Send, CheckCircle, MapPin, Star, Users, Award
} from 'lucide-react';

const SERVICES = [
  { icon: MessageCircle, label: 'WhatsApp Ordering', desc: 'Quick and easy ordering through WhatsApp. Chat with us and we\'ll sort you out.', color: 'bg-gold-500/10 text-gold-400' },
  { icon: Truck, label: 'Delivery & Collection', desc: 'Collect from Sky City, Alberton or get delivery to your door.', color: 'bg-cerise-500/10 text-cerise-400' },
  { icon: ShoppingBag, label: 'Online Ordering', desc: 'Browse our full menu and order directly through our website cart.', color: 'bg-ink-700/50 text-ink-300' },
  { icon: Calendar, label: 'Event Catering', desc: 'We cater for birthdays, gatherings, graduations, corporate events and more.', color: 'bg-gold-500/10 text-gold-400' },
];

const OCCASIONS = [
  { icon: '🎂', label: 'Birthdays' },
  { icon: '👨‍👩‍👧', label: 'Family Gatherings' },
  { icon: '💍', label: 'Anniversaries' },
  { icon: '👶', label: 'Baby Showers' },
  { icon: '🎓', label: 'Graduations' },
  { icon: '💼', label: 'Corporate Events' },
  { icon: '🎉', label: 'Special Occasions' },
];

const STATS = [
  { value: '5+', label: 'Years Experience', icon: Award },
  { value: '100%', label: 'Homemade', icon: Star },
  { value: '500+', label: 'Happy Customers', icon: Users },
  { value: '7', label: 'Days a Week', icon: Clock },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  occasion: string;
  message: string;
  contact: string;
}

export default function AboutPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    occasion: '',
    message: '',
    contact: 'WhatsApp',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    const message = encodeURIComponent(
      `Hi Rochelle! I submitted a contact form:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nOccasion: ${formData.occasion || 'N/A'}\n\nMessage: ${formData.message}\n\nPreferred contact: ${formData.contact}`
    );
    setSubmitted(true);
    window.open(`https://wa.me/27814654641?text=${message}`, '_blank');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="overflow-x-hidden bg-ink-900 pt-16">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-ink-800 to-ink-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Catering background"
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 to-ink-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">
            Sky City, Alberton · 081 465 4641
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-medium mt-3 mb-4 text-ink-100">
            About Rochelle's Treats
          </h1>
          <p className="font-body text-ink-400 max-w-xl mx-auto leading-relaxed">
            Freshly prepared home-cooked meals made to order. Catering for every occasion with love and quality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Logo + stats */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-cerise-500/5 blur-3xl" />
                <div className="relative card-base p-8 sm:p-10 bg-gradient-to-br from-ink-800/60 to-ink-900/40 flex flex-col items-center">
                  <img
                    src="/image.png"
                    alt="Rochelle's Treats Catering"
                    className="h-40 sm:h-48 w-auto object-contain mb-6 drop-shadow-lg"
                  />
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {STATS.map(({ value, label }) => (
                      <div key={label} className="text-center p-3 rounded-xl bg-ink-800/60 border border-ink-700/40">
                        <div className="font-display text-2xl font-medium text-cerise-400 italic">{value}</div>
                        <div className="font-accent text-[10px] font-semibold tracking-wider uppercase text-ink-500 mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div>
              <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink-100 mt-3 mb-6">
                Good Food, Great Taste,<br />
                <span className="italic text-cerise-400">Always Made With Love</span>
              </h2>
              <div className="space-y-4 font-body text-ink-400 leading-relaxed">
                <p>
                  Rochelle's Treats Catering was born from a deep love of cooking and a desire to bring families together around great food. Based in Sky City, Alberton, we've been crafting homemade meals that taste exactly like something your grandmother would make.
                </p>
                <p>
                  Every dish is prepared fresh to order — no pre-packaged shortcuts, no frozen shortcuts. Just real ingredients, real care, and real flavour. From a creamy pasta to a full family combo tray, we pour our heart into every meal we prepare.
                </p>
                <p>
                  Whether you're feeding the family on a weeknight or catering a special occasion, Rochelle's Treats is here to make it unforgettable.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/menu" className="btn-primary">
                  <ShoppingBag className="w-4 h-4" strokeWidth={2} /> View Our Menu
                </Link>
                <a
                  href="https://wa.me/27814654641?text=Hi%20Rochelle!%20I%27d%20like%20to%20enquire%20about%20catering."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle className="w-4 h-4 fill-ink-900" strokeWidth={1.5} /> Chat With Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Services visual */}
      <section className="bg-ink-800/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">Catering Services</span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink-100 mt-3 mb-6">
                We Cater For<br />
                <span className="italic text-cerise-400">Every Occasion</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {OCCASIONS.map(({ icon, label }) => (
                  <div key={label} className="card-base p-3 flex items-center gap-2.5">
                    <span className="text-xl">{icon}</span>
                    <span className="font-accent text-sm font-medium text-ink-300">{label}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-ink-500 italic mb-6">
                "Freshly prepared home-cooked meals made to order. Perfect for any occasion."
              </p>
              <a
                href="https://wa.me/27814654641?text=Hi%20Rochelle!%20I%27d%20like%20to%20book%20catering%20for%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar className="w-4 h-4" strokeWidth={2} /> Book Your Event
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/image copy.png"
                alt="Rochelle's Treats Catering Services"
                className="w-full object-cover object-top"
                style={{ maxHeight: '520px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink-100 mt-3">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, label, desc, color }) => (
              <div key={label} className="card-base p-6 card-hover">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-base font-medium text-ink-100 mb-2">{label}</h3>
                <p className="font-body text-sm text-ink-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad bg-gradient-to-b from-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="font-accent text-cerise-400 font-semibold text-xs tracking-[0.2em] uppercase">Get In Touch</span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink-100 mt-3">Contact Us</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone / WhatsApp', value: '081 465 4641', href: 'tel:+27814654641' },
                { icon: Mail, label: 'Email', value: 'rochellegalant4@gmail.com', href: 'mailto:rochellegalant4@gmail.com' },
                { icon: MapPin, label: 'Pick-up Point', value: 'Sky City, Alberton' },
                { icon: Clock, label: 'Business Hours', value: 'Monday – Sunday, 10:00 AM – 7:00 PM' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="card-base p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cerise-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-cerise-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-accent text-xs font-semibold text-ink-500 uppercase tracking-wider mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="font-body text-ink-200 hover:text-cerise-400 transition-colors">{value}</a>
                    ) : (
                      <div className="font-body text-ink-200">{value}</div>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/27814654641"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-accent font-semibold py-4 transition-colors shadow-lg mt-4"
              >
                <MessageCircle className="w-5 h-5 fill-white" strokeWidth={1.5} /> Chat With Us on WhatsApp
              </a>
            </div>

            {/* Contact form */}
            <div className="card-base p-7 bg-ink-800/40">
              <h3 className="font-display text-xl font-medium text-ink-100 mb-6">Send a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                  <CheckCircle className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
                  <h4 className="font-display text-ink-100 font-medium mb-2">Message Sent!</h4>
                  <p className="font-body text-sm text-ink-500">Your message has been opened in WhatsApp. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-accent font-medium text-ink-200 text-sm mb-1.5">
                        Name <span className="text-cerise-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block font-accent font-medium text-ink-200 text-sm mb-1.5">Phone</label>
                      <input
                        type="tel"
                        placeholder="e.g. 083 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-accent font-medium text-ink-200 text-sm mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block font-accent font-medium text-ink-200 text-sm mb-1.5">Occasion / Event Type</label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday party for 20 guests"
                      value={formData.occasion}
                      onChange={(e) => setFormData((p) => ({ ...p, occasion: e.target.value }))}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-accent font-medium text-ink-200 text-sm mb-1.5">
                      Message <span className="text-cerise-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about your order or event requirements…"
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      className="input-field resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-accent font-medium text-ink-200 text-sm mb-2">Preferred Contact</label>
                    <div className="flex gap-3">
                      {['WhatsApp', 'Phone', 'Email'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, contact: opt }))}
                          className={`flex-1 text-sm font-accent font-medium py-2 rounded-lg transition-all border ${
                            formData.contact === opt
                              ? 'bg-cerise-500 text-white border-cerise-500'
                              : 'bg-ink-800 text-ink-400 border-ink-700 hover:border-cerise-500/50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-cerise-500 hover:bg-cerise-600 text-white font-accent font-semibold py-3.5 transition-all shadow-lg shadow-cerise-500/20 flex items-center justify-center gap-2"
                  >
                    <>Send Message <Send className="w-4 h-4" strokeWidth={2} /></>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
