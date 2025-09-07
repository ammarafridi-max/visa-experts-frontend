import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiCheck,
} from 'react-icons/hi2';
import Container from '../Container';
import PrimarySection from '../PrimarySection';
import SectionTitle from '../SectionTitle';

export default function Benefits({ keyword = 'dummy ticket' }) {
  return (
    <PrimarySection className="pb-20" id="benefits">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="Why choose us"
          className="mb-15"
        >
          Why Travelers Trust VisaExperts
        </SectionTitle>
        <div className="block md:grid md:grid-cols-3 gap-10">
          <IconCard
            icon={<HiCheck />}
            title="Expert Guidance"
            text={`Our experienced visa consultants simplify even complex requirements, answer every question, and guide you step-by-step so you never feel lost.`}
          />
          <IconCard
            icon={<HiOutlineClock />}
            title="High Success Rate"
            text={`Thousands of travelers have successfully secured visas with us, thanks to our detailed document checks and personalized support at every stage.`}
          />
          <IconCard
            icon={<HiOutlineCurrencyDollar />}
            title="24/7 WhatsApp Support"
            text={`Wherever you are in the world, our team is available on WhatsApp anytime — ready to answer, assist, and guide instantly.`}
          />
        </div>
      </Container>
    </PrimarySection>
  );
}

function IconCard({ icon, title, text }) {
  return (
    <div className="w-full mb-12 text-center md:mb-0">
      <div className="w-fit text-3xl text-primary-500 flex items-center justify-center bg-primary-50 p-3.75 mx-auto rounded-full overflow-hidden">
        {icon}
      </div>
      <h3 className="text-lg mt-4 mb-2 p-0 font-bold font-outfit md:text-[18px]">
        {title}
      </h3>
      <p className="text-center text-[17px] font-light font-outfit leading-6">
        {text}
      </p>
    </div>
  );
}
