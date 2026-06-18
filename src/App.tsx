import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream-100 px-4 text-center pt-16">
      <div className="font-heading text-7xl text-sweet-500 mb-4">Oops!</div>
      <h1 className="font-display text-2xl font-bold text-gray-800 mb-2">Page not found</h1>
      <p className="font-body text-gray-500 mb-6">The page you're looking for doesn't exist or has moved.</p>
      <a href="/" className="btn-primary">Back to Home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-cream-100">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
