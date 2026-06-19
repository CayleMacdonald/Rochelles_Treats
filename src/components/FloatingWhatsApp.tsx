import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27814654641?text=Hi%20Rochelle!%20I%27d%20like%20to%20place%20an%20order%20please."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-whatsapp-500 text-white shadow-lg shadow-whatsapp-500/30 animate-pulse-ring hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="w-5 h-5 fill-white" strokeWidth={1.5} />
    </a>
  );
}
