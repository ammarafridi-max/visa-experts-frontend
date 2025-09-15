import Container from './Container';
import PrimaryButton from './PrimaryButton';
import PrimaryLink from './PrimaryLink';
import PrimarySection from './PrimarySection';
import SectionTitle from './SectionTitle';

export default function ContactBanner({
  cta = "Got more questions? We're here to help you every step of the way. Contact us now!",
  message = 'Hi VisaWadi, I need assistance with a visa.',
}) {
  return (
    <PrimarySection className="py-10 md:py-12 bg-primary-50">
      <Container>
        <div className="flex flex-col items-center gap-3">
          <p className="font-outfit text-lg md:text-xl text-center">{cta}</p>
          <PrimaryLink
            target="_blank"
            to={`https://wa.me/971506045355?text=${message.split(' ').join('%20')}`}
          >
            Chat With Us Now!
          </PrimaryLink>
        </div>
      </Container>
    </PrimarySection>
  );
}
