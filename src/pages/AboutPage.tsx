import { useState } from 'react';
import {
  Mail, Phone, MessageCircle, Clock, Truck, ShoppingBag, Calendar,
  ChefHat, Heart, Star, ArrowRight
} from 'lucide-react';
import { BakeryBasketIllustration, FloatingStar, FloatingCupcake, FloatingDonut } from '../components/Illustrations';

const SERVICES = [
  { icon: Truck, label: 'Delivery', desc: 'Fresh meals delivered straight to your door. Delivery fees vary by location.', color: 'bg-lagoon-100 text-lagoon-600' },
  { icon: ShoppingBag, label: 'Collection', desc: 'Convenient pickup service available. Order ahead and collect at a time that suits you.', color: 'bg-sweet-100 text-sweet-600' },
  { icon: Calendar, label: 'Special Orders', desc: 'Custom food orders for events, parties, or catering available upon request.', color: 'bg-buttercup-100 text-buttercup-600' },
  { icon: MessageCircle, label: 'WhatsApp Ordering', desc: 'Quick and easy ordering through WhatsApp. Chat with us and we\'ll sort you out!', color: 'bg-green-100 text-green-600' },
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
      <section className="bg-gradient-to-br from-sweet-500 via-sweet-400 to-cherry-500 py-14 sm:py-20 relative overflow-hidden dotted-bg">
        <FloatingStar className="absolute top-10 left-8 w-9 h-9 animate-float-slow opacity-60" />
        <FloatingCupcake className="absolute top-8 right-10 w-20 h-20 animate-float-med" />
        <FloatingDonut className="absolute bottom-8 left-12 w-14 h-14 animate-float-fast opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center text-white">
          <span className="font-display text-white/80 font-semibold text-sm tracking-widest uppercase">Our Story</span>
          <h1 className="font-heading text-4xl sm:text-5xl drop-shadow-md mt-2 mb-3">About Rochelle's Treats</h1>
          <p className="font-body text-white/90 max-w-xl mx-auto">
            Made with love, served with heart. Discover the story behind our homemade comfort food.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-cream-100 section-pad">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-sweet-200 blur-3xl opacity-50" />
                <div className="relative card-base p-6 bg-gradient-to-br from-sweet-50 to-cream-100">
                  <BakeryBasketIllustration className="w-56 sm:w-72 h-auto mx-auto animate-float-slow" />
                  {/* Floating stats */}
                  <div className="absolute -top-4 -right-4 card-base bg-buttercup-400 text-gray-900 px-4 py-2 shadow-xl animate-bounce-soft">
                    <div className="font-heading text-2xl leading-none">5+</div>
                    <div className="font-display text-xs font-semibold">Years Experience</div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 card-base bg-sweet-500 text-white px-4 py-2 shadow-xl animate-float-fast">
                    <div className="font-heading text-2xl leading-none">100%</div>
                    <div className="font-display text-xs font-semibold">Homemade</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="font-display text-sweet-500 font-semibold text-sm tracking-widest uppercase">Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-5 leading-tight">
                Welcome to Rochelle's Treats!
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
                <p className="font-display font-bold text-sweet-600 text-lg">
                  Every meal is prepared with one goal in mind: Delicious food, happy hearts. ❤️
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-4 mt-7">
                {[
                  { icon: ChefHat, label: '5+ Years', sub: 'Experience' },
                  { icon: Heart, label: 'Homemade', sub: 'Every Meal' },
                  { icon: Star, label: 'Happy', sub: 'Customers' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="card-base p-3 text-center hover:shadow-lg transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-sweet-100 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-sweet-500" />
                    </div>
                    <div className="font-display font-bold text-gray-800 text-sm">{label}</div>
                    <div className="font-body text-xs text-gray-500">{sub}</div>
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
          <div className="text-center mb-10">
            <span className="font-display text-sweet-500 font-semibold text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map(({ icon: Icon, label, desc, color }) => (
              <div key={label} className="card-base p-6 flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-800 mb-1.5">{label}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad bg-gradient-to-b from-cream-100 to-cream-200">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-display text-sweet-500 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Contact Us</h2>
            <p className="font-body text-gray-500 mt-2 max-w-md mx-auto">We'd love to hear from you! Reach out to place an order or ask any questions.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-5">
              {/* Contact cards */}
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'rochellegalant4@gmail.com',
                  href: 'mailto:rochellegalant4@gmail.com',
                  color: 'bg-sweet-100 text-sweet-600',
                  hoverColor: 'hover:text-sweet-700',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '081 465 4641',
                  href: 'tel:+27814654641',
                  color: 'bg-lagoon-100 text-lagoon-600',
                  hoverColor: 'hover:text-lagoon-700',
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  content: 'Monday – Sunday: 10:00 AM – 7:00 PM',
                  href: undefined,
                  color: 'bg-buttercup-100 text-buttercup-600',
                  hoverColor: '',
                },
              ].map(({ icon: Icon, title, content, href, color }) => (
                <div key={title} className="card-base p-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-gray-500 text-xs uppercase tracking-wider mb-0.5">{title}</div>
                    {href ? (
                      <a href={href} className="font-body font-semibold text-gray-800 hover:text-sweet-600 transition-colors break-all">
                        {content}
                      </a>
                    ) : (
                      <p className="font-body font-semibold text-gray-800">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/27814654641?text=Hi%20Rochelle!%20I%27d%20like%20to%20chat%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center py-4 text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" /> Chat With Us Now
              </a>

              {/* Google Maps placeholder */}
              <div className="card-base overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-lagoon-100 to-lagoon-50 flex flex-col items-center justify-center gap-2 text-lagoon-600">
                  <div className="w-12 h-12 rounded-full bg-lagoon-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="font-display font-semibold text-sm">Service Area Map</p>
                  <p className="font-body text-xs text-lagoon-500">Contact us via WhatsApp for your location</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-base p-6">
              <h3 className="font-display font-bold text-gray-800 text-xl mb-5">Send a Message</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-green-500 fill-green-500" />
                  </div>
                  <h4 className="font-display font-bold text-gray-800 mb-2">Message Sent!</h4>
                  <p className="font-body text-sm text-gray-500">Your message has been opened in WhatsApp. We'll get back to you soon!</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary mt-4 text-sm">
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
                      <label htmlFor={id} className="block font-display font-semibold text-gray-700 text-sm mb-1.5">
                        {label} {required && <span className="text-cherry-500">*</span>}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        value={(formData as Record<string, string>)[id]}
                        onChange={(e) => setFormData((p) => ({ ...p, [id]: e.target.value }))}
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-sweet-400 transition-colors font-body"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block font-display font-semibold text-gray-700 text-sm mb-1.5">
                      Message <span className="text-cherry-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      placeholder="Tell us what you need..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-sweet-400 transition-colors resize-none font-body"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-semibold text-gray-700 text-sm mb-2">Preferred Contact Method</label>
                    <div className="flex flex-wrap gap-2">
                      {['whatsapp', 'phone', 'email'].map((method) => (
                        <label
                          key={method}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer text-sm font-display font-semibold transition-all ${
                            formData.contact === method
                              ? 'bg-sweet-500 text-white shadow-md'
                              : 'bg-sweet-50 text-sweet-600 hover:bg-sweet-100'
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
                      <>Send Message <ArrowRight className="w-4 h-4" /></>
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
