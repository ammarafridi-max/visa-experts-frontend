import { FaWhatsapp } from 'react-icons/fa';
import Container from './Container';

export const pages = [
  { name: 'Process', link: '/#process' },
  { name: 'Services', link: '/#services' },
  { name: 'Why Choose VisaWadi', link: '/#benefits' },
  { name: 'FAQs', link: '/#faq' },
];

export default function Navigation() {
  return (
    <header className="hidden lg:block bg-transparent py-2 shadow-md">
      <Container>
        <nav className="flex items-center justify-between py-1.25">
          <div className="w-[21%] p-0">
            <a href="/">
              {/* <img
                src="/logo.webp"
                alt="My Dummy Ticket Logo"
                title="My Dummy Ticket Logo"
                className="w-full h-full object-contain"
              /> */}
            </a>
          </div>
          <div className="w-auto flex items-center justify-between gap-5">
            {pages.map((page, i) => (
              <a
                className="text-[17px] font-regular font-outfit text-gray-700 capitalize py-2.5 px-1.25 duration-300 hover:text-accent-500 last:pr-0"
                key={i}
                href={page.link}
                title={page.name}
              >
                {page.name}
              </a>
            ))}
            {/* <a className="font-outfit bg-[#25d366] text-white border-2 py-1.5 border-[#25d366] px-5 rounded-full cursor-pointer flex items-center gap-2">
              <FaWhatsapp className="text-xl" />
              <span>Chat With Us</span>
            </a> */}
          </div>
        </nav>
      </Container>
    </header>
  );
}
