import PrimarySection from '../PrimarySection';
import Container from '../Container';
import PageTitle from '../PageTitle';
import PrimaryButton from '../PrimaryButton';
import PrimaryButtonOutline from '../PrimaryButtonOutline';

export default function Hero({
  title = 'Hassle-Free Visa Assistance for Schengen, US, UK & More.',
  subtitle = 'Get expert guidance, fast approvals, and end-to-end support for your travel visa. Whether it’s business, study, or tourism – VisaExperts makes the process simple and stress-free.',
}) {
  return (
    <PrimarySection className="bg-[url(/hero-bg.png)] mb-15 md:mb-20" id="form">
      <div className="py-10 md:py-25 bg-[rgba(17,6,34,0.8)]">
        <Container>
          <div className="w-full md:max-w-[1000px] md:mx-auto">
            <PageTitle className="text-center text-white">{title}</PageTitle>
            <p className="text-[16px] md:text-[18px] text-center text-white font-extralight font-outfit lg:font-light mt-6 mb-7">
              {subtitle}
            </p>
            <div className="flex items-center gap-2 justify-center">
              <PrimaryButton>Chat With Us</PrimaryButton>
              <PrimaryButtonOutline>See Our Services</PrimaryButtonOutline>
            </div>
          </div>
        </Container>
      </div>
    </PrimarySection>
  );
}
