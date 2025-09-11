import Container from './Container';
import PrimaryButton from './PrimaryButton';
import PrimarySection from './PrimarySection';
import SectionTitle from './SectionTitle';

export default function ContactBanner({
  cta = "Got more questions? We're here to help you every step of the way. Contact us now!",
}) {
  return (
    <PrimarySection className="py-10 md:py-12 bg-primary-50">
      <Container>
        <div className="flex flex-col items-center gap-3">
          <p className="font-outfit text-lg md:text-xl text-center">{cta}</p>
          <PrimaryButton>Chat With Us Now!</PrimaryButton>
        </div>
      </Container>
    </PrimarySection>
  );
}
