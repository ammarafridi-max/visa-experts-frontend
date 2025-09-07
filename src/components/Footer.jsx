import {
  FaStripe,
  FaGooglePay,
  FaApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaPhone,
  FaPhoneAlt,
  FaEnvelope,
  FaMapPin,
  FaWhatsapp,
} from 'react-icons/fa';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="py-5 bg-primary-900">
      <Container className="py-7.5 bg-transparent box-border font-outfit">
        <div className="flex justify-between gap-8 mb-10">
          <div className="w-[100%] md:w-[30%]"></div>
          <div className="w-[100%] md:w-[20%]">
            <p className="text-xl text-white">Site Links</p>
            <div className="flex flex-col mt-4 text-white text-lg font-extralight gap-0.5">
              <FooterLink>Home</FooterLink>
              <FooterLink>About</FooterLink>
              <FooterLink>Services</FooterLink>
              <FooterLink>Benefits</FooterLink>
            </div>
          </div>
          <div className="w-full md:w-[20%]">
            <p className="text-xl text-white">Visas</p>
            <div className="flex flex-col mt-4 text-white text-lg font-extralight gap-0.5">
              <FooterLink>Schengen Visa</FooterLink>
              <FooterLink>US Visa (B1/B2)</FooterLink>
              <FooterLink>UK Tourist Visa</FooterLink>
              <FooterLink>Canada Visa</FooterLink>
              <FooterLink>Australia Visa</FooterLink>
            </div>
          </div>
          <div className="w-[100%] md:w-[30%]">
            <p className="text-xl text-white">Contact Us</p>
            <div className="flex flex-col mt-4 text-white text-lg font-extralight gap-3">
              <IconCard icon={<FaPhoneAlt />} href="tel:971506045355">
                +971 50 604 5355
              </IconCard>
              <IconCard icon={<FaWhatsapp />} href="mailto">
                WhatsApp Us
              </IconCard>
              <IconCard icon={<FaEnvelope />} href="mailto">
                info@visaexperts.ae
              </IconCard>
              <IconCard icon={<FaMapPin />} href="mailto">
                A Block, Abraj Al Mamzar
              </IconCard>
            </div>
          </div>
        </div>
        <div className="w-full gap-3 md:gap-5 mx-auto mb-3.5 pb-3.5 flex items-center justify-center border-b-1 border-solid border-gray-200 ">
          {icons.map((icon, i) => (
            <div key={i} className="text-white text-[35px] md:text-[40px]">
              {icon}
            </div>
          ))}
        </div>
        <div>
          <div className="text-center text-white font-light text-[14px] md:text-[16px]">
            © 2025 TRAVL Technologies. All Rights Reserved.
          </div>
          <div className="flex items-center justify-center gap-2.5 text-[14px] font-bold text-white">
            <a href="/terms-and-conditions" className="color-white">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/privacy-policy" className="color-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

const icons = [
  <FaStripe />,
  <FaGooglePay />,
  <FaApplePay />,
  <FaCcVisa />,
  <FaCcMastercard />,
];

function FooterLink({ href, children }) {
  return (
    <a href={href} className="cursor-pointer group hover:text-primary-100">
      <span className="text-primary-100 mr-4 font-bold duration-300 group-hover:text-primary-500">
        —
      </span>
      {children}
    </a>
  );
}

function IconCard({ icon, href, children }) {
  return (
    <a href={href} className="flex items-center gap-3 leading-6 group">
      <span className="bg-primary-500 w-[30px] h-[30px] rounded-full flex items-center justify-center text-sm duration-300 group-hover:bg-primary-600">
        {icon}
      </span>
      <p>{children}</p>
    </a>
  );
}
