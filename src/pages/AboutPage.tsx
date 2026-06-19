import { useState } from 'react';
import {
  Mail, Phone, MessageCircle, Clock, Truck, ShoppingBag, Calendar,
  ChefHat, Heart, Star, MapPin, Send
} from 'lucide-react';
import { BakeryBasketIllustration, DecorativeCircle } from '../components/Illustrations';

const SERVICES = [
  { icon: Truck, label: 'Delivery', desc: 'Fresh meals delivered straight to your door. Delivery fees vary by location.', color: 'bg-sage-50 text-sage-600' },
  { icon: ShoppingBag, label: 'Collection', desc: 'Convenient pickup service available. Order ahead and collect at a time that suits you.', color: 'bg-brand-50 text-brand-600' },
  { icon: Calendar, label: 'Special Orders', desc: 'Custom food orders for events, parties, or catering available upon request.', color: 'bg-terracotta-50 text-terracotta-600' },
  { icon: MessageCircle, label: 'WhatsApp Ordering', desc: 'Quick and easy ordering through WhatsApp. Chat with us and we\'ll sort you out.', color: 'bg-whatsapp-50 text-whatsapp-600' },
];

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    contact: 'whatsapp',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const message = encodeURIComponent(
      `Hi Rochelle! I submitted a contact form:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage: ${formData.message}\n\nPreferred contact: ${formData.contact}`
    );
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/27814654641?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <div className="overflow-x-hidden pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <DecorativeCircle className="absolute top-10 left-10 w-40 h-40" />
          <DecorativeCircle className="absolute bottom-10 right-10 w-32 h-32" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center text-white">
          <span className="font-accent text-brand-300 font-semibold text-xs tracking-[0.2em] uppercase">Our Story</span>
          <h1 className="font-display text-4xl sm:text-5xl font-medium mt-3 mb-4">About Rochelle's Treats</h1>
          <p className="font-body text-brand-200/80 max-w-lg mx-auto leading-relaxed">
            Made with love, served with heart. Discover the story behind our homemade comfort food.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-cream-50 section-pad">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-brand-200/20 blur-3xl scale-90" />
                <div className="relative card-base p-8 bg-gradient-to-br from-cream-50 to-white">
                  <BakeryBasketIllustration className="w-56 sm:w-72 h-auto mx-auto" />
                  <div className="absolute -top-4 -right-4 card-base bg-brand-500 text-white px-4 py-2.5 shadow-lg">
                    <div className="font-display text-2xl font-medium italic leading-none">5+</div>
                    <div className="font-accent text-[10px] font-semibold tracking-wider uppercase">Years</div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 card-base bg-terracotta-500 text-white px-4 py-2.5 shadow-lg">
                    <div className="font-display text-2xl font-medium italic leading-none">100%</div>
                    <div className="font-accent text-[10px] font-semibold tracking-wider uppercase">Homemade</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="font-accent text-brand-500 font-semibold text-xs tracking-[0.2em] uppercase">Our Story</span>
              <div className="divider-line mt-3 mb-4" />
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-brand-900 mb-6 leading-tight">
                Welcome to<br /><span className="italic text-brand-500">Rochelle's Treats</span>
              </h2>
              <div className="space-y-4 font-body text-gray-600 leading-relaxed">
                <p>
                  I have worked in the culinary industry for over 5 years and have gained valuable experience in both food preparation and baking. My passion has always been creating delicious meals that bring people together and put smiles on faces.
                </p>
                <p>
                  With experience in the bakery field and a love for quality home-style cooking, I started Rochelle's Treats to share my passion for good food with my community.
                </p>
                <p>
                  For the past year, Rochelle's Treats has proudly served customers with freshly prepared meals made with care, quality ingredients, and attention to detail.
                </p>
                <p className="font-display text-brand-600 text-lg italic mt-4">
                  Every meal is prepared with one goal in mind: Delicious food, happy hearts.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: ChefHat, label: '5+ Years', sub: 'Experience' },
                  { icon: Heart, label: 'Homemade', sub: 'Every Meal' },
                  { icon: Star, label: 'Happy', sub: 'Customers' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="card-base p-4 text-center card-hover">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-brand-500" strokeWidth={1.5} />
                    </div>
                    <div className="font-accent font-bold text-brand-900 text-sm">{label}</div>
                    <div className="font-body text-xs text-gray-400">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="font-accent text-brand-500 font-semibold text-xs tracking-[0.2em] uppercase">What We Offer</span>
            <div className="divider-line mx-auto mt-3 mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-brand-900">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map(({ icon: Icon, label, desc, color }) => (
              <div key={label} className="card-base p-7 flex items-start gap-5 card-hover">
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-brand-900 mb-1.5">{label}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="font-accent text-brand-500 font-semibold text-xs tracking-[0.2em] uppercase">Get In Touch</span>
            <div className="divider-line mx-auto mt-3 mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-brand-900">Contact Us</h2>
            <p className="font-body text-gray-500 mt-3 max-w-md mx-auto">We'd love to hear from you! Reach out to place an order or ask any questions.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'rochellegalant4@gmail.com',
                  href: 'mailto:rochellegalant4@gmail.com',
                  color: 'bg-brand-50 text-brand-500',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '081 465 4641',
                  href: 'tel:+27814654641',
                  color: 'bg-sage-50 text-sage-500',
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  content: 'Monday – Sunday: 10:00 AM – 7:00 PM',
                  href: undefined,
                  color: 'bg-terracotta-50 text-terracotta-500',
                },
              ].map(({ icon: Icon, title, content, href, color }) => (
                <div key={title} className="card-base p-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-accent font-medium text-gray-400 text-[10px] uppercase tracking-wider mb-0.5">{title}</div>
                    {href ? (
                      <a href={href} className="font-body font-semibold text-brand-900 hover:text-brand-600 transition-colors break-all">
                        {content}
                      </a>
                    ) : (
                      <p className="font-body font-semibold text-brand-900">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/27814654641?text=Hi%20Rochelle!%20I%27d%20like%20to%20chat%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center py-4 text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" strokeWidth={1.5} /> Chat With Us Now
              </a>

              <div className="card-base overflow-hidden">
                <div className="h-44 bg-gradient-to-br from-sage-100 to-sage-50 flex flex-col items-center justify-center gap-2 text-sage-600">
                  <div className="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center">
                    <MapPin className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <p className="font-accent font-semibold text-sm">Service Area</p>
                  <p className="font-body text-xs text-sage-500">Contact us via WhatsApp for your location</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-base p-7">
              <h3 className="font-display text-xl font-medium text-brand-900 mb-6">Send a Message</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-sage-500 fill-sage-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-brand-900 font-medium mb-2">Message Sent!</h4>
                  <p className="font-body text-sm text-gray-500">Your message has been opened in WhatsApp. We'll get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary mt-6 text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
                    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'e.g. 081 234 5678', required: false },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: false },
                  ].map(({ id, label, type, placeholder, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block font-accent font-medium text-brand-900 text-sm mb-1.5">
                        {label} {required && <span className="text-terracotta-500">*</span>}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        value={(formData as Record<string, string>)[id]}
                        onChange={(e) => setFormData((p) => ({ ...p, [id]: e.target.value }))}
                        className="w-full rounded-xl border border-cream-300 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-400 transition-colors font-body bg-cream-50/50"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block font-accent font-medium text-brand-900 text-sm mb-1.5">
                      Message <span className="text-terracotta-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      placeholder="Tell us what you need..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      className="w-full rounded-xl border border-cream-300 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-400 transition-colors resize-none font-body bg-cream-50/50"
                    />
                  </div>
                  <div>
                    <label className="block font-accent font-medium text-brand-900 text-sm mb-2">Preferred Contact Method</label>
                    <div className="flex flex-wrap gap-2">
                      {['whatsapp', 'phone', 'email'].map((method) => (
                        <label
                          key={method}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer text-sm font-accent font-medium transition-all ${
                            formData.contact === method
                              ? 'bg-brand-500 text-white shadow-md'
                              : 'bg-brand-50 text-brand-600 hover:bg-brand-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="contact"
                            value={method}
                            checked={formData.contact === method}
                            onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
                            className="sr-only"
                          />
                          {method.charAt(0).toUpperCase() + method.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary py-3.5 justify-center text-base"
                  >
                    {submitting ? 'Sending...' : (
                      <>Send Message <Send className="w-4 h-4" strokeWidth={2} /></>
                    )}
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
