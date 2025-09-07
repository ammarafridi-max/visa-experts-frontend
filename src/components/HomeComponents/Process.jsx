import PrimarySection from '../PrimarySection';
import Container from '../Container';
import SectionTitle from '../SectionTitle';

const steps = [
  {
    title: 'Send us a DM',
    text: 'Message us on WhatsApp with your travel plans. Tell us where you’re going and what visa you need — we’ll reply right away.',
  },
  {
    title: 'Share Your Documents',
    text: 'Send your documents securely on WhatsApp. Our team will review them, check for errors, and confirm if anything’s missing.',
  },
  {
    title: 'Book Your Appointment',
    text: 'If an interview or biometrics is needed, we’ll guide you. From booking your embassy slot to prep tips, we’ll handle the details.',
  },
  {
    title: 'Get Your Visa',
    text: 'Relax while we keep an eye on the visa approval. We’ll update you at every step, and once approved, your visa is ready to go.',
  },
];

export default function Process() {
  return (
    <PrimarySection className="py-15 md:py-20" id="process">
      <Container>
        <SectionTitle textAlign="center" subtitle="How it Works" className="">
          Get Your Visa in 4 Easy Steps
        </SectionTitle>

        <div className="block gap-3.75 md:grid md:grid-cols-4 md:m-0 md:p-0">
          {steps.map((step, i) => (
            <div
              className="min-w-full md:min-w-10 max-w-full mb-8 md:mb-0 last-of-type:mb-0 rounded-lg duration-300"
              key={i}
            >
              <div className="w-10 h-10 bg-gray-900 text-white text-md font-medium font-outfit flex items-center justify-center rounded-4xl">
                {i + 1}
              </div>
              <h3 className="text-[18px] font-[500] font-outfit text-left mt-2 mb-1 md:mt-3 md:mb-2 p-0 capitalize">
                {step.title}
              </h3>
              <p className="text-[16.5px] font-light font-outfit text-left">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
