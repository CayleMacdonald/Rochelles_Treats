import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27814654641?text=Hi%20Rochelle!%20I%27d%20like%20to%20place%20an%20order%20please."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp-500 text-white shadow-xl shadow-whatsapp-500/40 animate-pulse-ring hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </a>
  );
}
