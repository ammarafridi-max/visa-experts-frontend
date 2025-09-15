import PrimarySection from '../components/PrimarySection';
import Container from '../components/Container';
import Benefits from '../components/HomeComponents/Benefits';
import Process from '../components/HomeComponents/Process';
import PageTitle from '../components/PageTitle';
import Breadcrumb from '../components/Breadcrumb';
import PrimaryLink from '../components/PrimaryLink';
import TestimonialCard from '../components/TestimonialCard';
import SectionTitle from '../components/SectionTitle';
import FAQAccordion from '../components/FAQAccordion';
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineGlobeEuropeAfrica,
  HiOutlineIdentification,
} from 'react-icons/hi2';
import ContactBanner from '../components/ContactBanner';
import PricingCard from '../components/PricingCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { visas } from '../data/visas';

export default function VisaDetail() {
  const { slug } = useParams();
  const [visaDetails, setVisaDetails] = useState({});
  useEffect(() => {
    visas.find((visa) => {
      if (visa?.slug === slug) {
        setVisaDetails(visa);
      }
    });
  }, [slug]);

  return (
    <>
      <Hero visaDetails={visaDetails} />
      <QuickFacts visaDetails={visaDetails} />
      <Pricing visaDetails={visaDetails} />
      <Process visa={visaDetails?.name} />
      <Benefits
        title={`Why Choose VisaWadi For Your ${visaDetails?.name}`}
        visa={visaDetails?.name}
      />
      <Testimonials visaDetails={visaDetails} />
      <FAQs visaDetails={visaDetails} />
      <ContactBanner
        cta={visaDetails?.cta}
        message={`Hi VisaWadi, I need assistance with ${visaDetails?.name}`}
      />
    </>
  );
}

function Hero({ visaDetails }) {
  return (
    <PrimarySection className="py-10 font-outfit">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-7 md:gap-20">
          <div className="w-full md:w-[63%] md:mb-0">
            <Breadcrumb
              paths={[
                { label: 'Home', href: '/' },
                { label: 'Visas', href: '/visas' },
                {
                  label: visaDetails?.name,
                  href: `/visas/${visaDetails?.slug}`,
                },
              ]}
            />
            <PageTitle>{visaDetails?.name}</PageTitle>
            <p className="font-light mt-5 text-md md:text-[18px]">
              {visaDetails?.description}
            </p>
            <PrimaryLink
              target="_blank"
              to={`https://wa.me/971506045355?text=Hi%20VisaWadi,%20I%20need%20more%20information%20about%20${visaDetails?.name?.split(' ').join('%20')}.`}
              className="mt-4 md:mt-7"
            >
              Get More Information
            </PrimaryLink>
          </div>
          <div className="w-full h-60 md:w-[37%] md:h-70 bg-gray-200 rounded-3xl overflow-hidden border-0">
            <img
              className=" w-full h-full border-0 object-cover object-center"
              src={visaDetails?.featuredImage}
            />
          </div>
        </div>
      </Container>
    </PrimarySection>
  );
}

function QuickFacts({ visaDetails }) {
  return (
    <PrimarySection className="py-10 bg-gray-100 font-outfit">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10">
          {[
            {
              icon: <HiOutlineCalendarDays />,
              title: 'Validity',
              description: visaDetails?.quickFacts?.validity,
            },
            {
              icon: <HiOutlineClock />,
              title: 'Processing Time',
              description: visaDetails?.quickFacts?.processingTime,
            },
            {
              icon: <HiOutlineGlobeEuropeAfrica />,
              title: 'Number of Countries',
              description: visaDetails?.quickFacts?.numberOfCountries,
            },
            {
              icon: <HiOutlineIdentification />,
              title: 'Visa Type',
              description: visaDetails?.quickFacts?.visaType,
            },
          ].map((fact, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="text-2xl text-primary-500 transition-transform duration-300 group-hover:rotate-12">
                {fact.icon}
              </div>
              <div className="flex flex-col leading-5">
                <p className="font-medium text-md md:text-lg">{fact.title}</p>
                <p className="font-light text-[15px]">{fact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}

function Testimonials({ visaDetails }) {
  return (
    <PrimarySection className="mb-15 md:mb-20">
      <Container>
        <SectionTitle textAlign="center" subtitle="Testimonials">
          What our customers say about us
        </SectionTitle>
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-scroll">
          {visaDetails?.testimonials?.map((test) => (
            <TestimonialCard
              name={test?.name}
              title={test?.title}
              purpose={test?.purpose}
            >
              {test?.text}
            </TestimonialCard>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}

function FAQs({ visaDetails }) {
  return (
    <PrimarySection className="mb-15 md:mb-20">
      <Container>
        <SectionTitle textAlign="center" subtitle="Frequently Asked Questions">
          Your {visaDetails?.name} Questions, Answered Simply
        </SectionTitle>
        <div className="w-full md:w-[90%] mx-auto">
          {visaDetails?.faqs?.map((faq, i) => (
            <FAQAccordion key={i} question={faq?.question}>
              {faq?.answer}
            </FAQAccordion>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}

function Pricing({ visaDetails }) {
  return (
    <PrimarySection className="bg-primary-700 py-15 mb-15 md:mb-20">
      <Container>
        <SectionTitle
          textAlign="center"
          type="secondary"
          subtitle="Pricing Plans"
        >
          {visaDetails?.name} Pricing
        </SectionTitle>
        <div className="flex md:grid md:grid-cols-3 gap-3 overflow-x-scroll">
          {visaDetails?.packages?.map((pricing) => (
            <PricingCard visaDetails={visaDetails} pricing={pricing} />
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
