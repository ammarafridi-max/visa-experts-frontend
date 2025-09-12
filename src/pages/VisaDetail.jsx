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
import { FaCheck, FaXmark } from 'react-icons/fa6';
import PricingCard from '../components/PricingCard';

const visaDetails = {
  name: 'Schengen Visa',
  slug: 'schengen-visa',
  description:
    'The Schengen Visa lets you travel easily across 27 European countries, perfect for tourism, business, or multi-country trips. It saves time, reduces paperwork, and gives you the freedom to explore iconic cities and diverse cultures with ease. Begin your European adventure today and apply for your Schengen Visa with us.',
  featuredImage: '/schengen-visa.png',
  quickFacts: {
    validity: '2 weeks - 5 years',
    processingTime: '10 - 15 working days',
    numberOfCountries: '27 Schengen states',
    visaType: 'Tourist Visa',
  },
  testimonials: [
    {
      title: 'Hassle-Free Process',
      name: 'John D.',
      purpose: 'Tourist Visa – Schengen (Italy)',
      text: 'The team handled my application with great care and attention. I received clear guidance at every step and my visa came through faster than expected. Exploring Rome was a dream come true!',
    },
    {
      title: 'Excellent Guidance',
      name: 'Maria L.',
      purpose: 'Tourist Visa – Schengen (Spain)',
      text: 'VisaExperts explained the requirements clearly and helped me prepare the perfect set of documents. Thanks to their support, my trip to Barcelona went ahead without a single hiccup.',
    },
    {
      title: 'Fast and Reliable',
      name: 'Omar H.',
      purpose: 'Tourist Visa – Schengen (Netherlands)',
      text: 'I was impressed by how quickly they processed my application. Everything was transparent, professional, and efficient. I had my visa in hand well before my planned travel dates.',
    },
  ],
  faqs: [
    {
      question: 'How long does it take to get a Schengen visa?',
      answer:
        'The processing time for a Schengen visa is usually between 10 to 15 working days. However, it can vary depending on the embassy, season, and your nationality. We’ll guide you through preparation to avoid unnecessary delays.',
    },
    {
      question: 'How long can I stay in Europe with a Schengen visa?',
      answer:
        'A Schengen visa allows you to stay up to 90 days within a 180-day period. It is valid across all 27 Schengen countries, so you can enjoy multi-country travel without extra visas.',
    },
    {
      question: 'Do I need travel insurance for a Schengen visa?',
      answer:
        'Yes, travel insurance is mandatory. It must cover at least €30,000 for medical expenses and be valid across all Schengen states for the entire duration of your stay.',
    },
    {
      question: 'Can I apply for multiple entry with a Schengen visa?',
      answer:
        'Yes, you can apply for single, double, or multiple-entry Schengen visas depending on your travel needs. Multiple-entry visas are ideal if you plan to leave and re-enter the Schengen zone during your trip.',
    },
    {
      question: 'When should I apply for my Schengen visa?',
      answer:
        'It is recommended to apply at least 15 days before your trip and no earlier than 6 months in advance. Applying early gives you enough time in case of additional document requests.',
    },
    {
      question: 'Which embassy should I apply to for my Schengen visa?',
      answer:
        'You should apply to the embassy of the country where you will spend the most days. If your stay is equal in multiple countries, apply to the embassy of the country you will enter first.',
    },
    {
      question: 'What documents are required for a Schengen visa?',
      answer:
        'The required documents usually include a valid passport, completed application form, recent photos, proof of accommodation, travel insurance, flight reservation, and financial statements. Requirements may vary by embassy.',
    },
    {
      question: 'Can I extend my Schengen visa once I am in Europe?',
      answer:
        'Extensions are only granted in exceptional cases such as medical emergencies or force majeure. For regular travel, you cannot extend your Schengen visa and must leave once your stay period ends.',
    },
    {
      question: 'What is the Schengen visa fee?',
      answer:
        'The standard Schengen visa fee is €80 for adults and €40 for children aged 6 to 12. Children under 6 are exempt. Some categories may also have reduced or waived fees.',
    },
    {
      question: 'Is it guaranteed that I will get a Schengen visa?',
      answer:
        'A visa approval is not guaranteed, as it depends on the documents, purpose of travel, and embassy decision. However, with proper guidance and complete documentation, your chances of approval are much higher.',
    },
  ],
  packages: [
    {
      name: 'Basic',
      description:
        'Essential support for your Schengen visa with the required bookings sent straight to your inbox.',
      recommended: false,
      inclusions: [
        'Flight reservation (dummy ticket)',
        'Hotel reservation',
        'Travel insurance',
        'All documents sent via email',
      ],
      exclusions: [
        'Appointment booking',
        'Courier service',
        'Full document compilation',
      ],
      pricing: {
        price: 149,
        type: 'per person',
      },
    },
    {
      name: 'Standard',
      description:
        'Get the essentials plus hands-on help with securing your visa appointment.',
      recommended: true,
      inclusions: [
        'Flight reservation (dummy ticket)',
        'Hotel reservation',
        'Travel insurance',
        'Appointment booking assistance',
        'All documents sent via email',
      ],
      exclusions: ['Courier service', 'Full document compilation'],
      pricing: {
        price: 249,
        type: 'per person',
      },
    },
    {
      name: 'Premium',
      description:
        'Complete end-to-end support, with documents fully prepared, organized, and delivered to you.',
      recommended: false,
      inclusions: [
        'Flight reservation (dummy ticket)',
        'Hotel reservation',
        'Travel insurance',
        'Appointment booking assistance',
        'Custom travel itinerary',
        'Passport copies, Emirates IDs, birth certificates, NOCs',
        'All documents compiled and organized',
        'Courier delivery to your address',
      ],
      exclusions: [],
      pricing: {
        price: 399,
        type: 'per person',
      },
    },
  ],
};

export default function VisaDetail() {
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
      <ContactBanner cta="Ready to explore Europe? Start your Schengen Visa application today with VisaWadi." />
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
            <PrimaryLink className="mt-4 md:mt-7">
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
            <PricingCard pricing={pricing} />
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
