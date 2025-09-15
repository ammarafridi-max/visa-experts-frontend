import { Outlet } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Navigation from './Navigation';
import Footer from './Footer';
import MobileNavigation from './MobileNavigation';
import { website } from '../data/website';

export default function Layout() {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <Outlet />
      <Footer />
      <WhatsAppChat />
    </>
  );
}

function WhatsAppChat() {
  return (
    <a
      target="_blank"
      href={`https://wa.me/${website?.phone}?text=${'Hi VisaWadi, I need assistance with a visa.'.split(' ').join('%20')}`}
      className="flex items-center gap-2 fixed bottom-5 right-5 bg-[#25d366] hover:bg-[#21bd5b] duration-300 cursor-pointer z-10 text-white font-outfit py-3 px-7 rounded-full"
    >
      <FaWhatsapp className="text-2xl" />
      <span>Chat With Us</span>
    </a>
  );
}
