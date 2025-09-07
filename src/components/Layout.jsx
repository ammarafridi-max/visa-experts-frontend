import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import MobileNavigation from './MobileNavigation';
import { FaWhatsapp } from 'react-icons/fa';
import ContactBanner from './ContactBanner';

export default function Layout() {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <Outlet />
      <ContactBanner />
      <Footer />
      <WhatsAppChat />
    </>
  );
}

function WhatsAppChat() {
  return (
    <button className="flex items-center gap-2 fixed bottom-5 right-5 bg-[#25d366] z-10 text-white font-outfit py-3 px-7 rounded-full">
      <FaWhatsapp className="text-2xl" />
      <span>Chat With Us</span>
    </button>
  );
}
