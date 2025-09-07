import Container from './Container';
import PrimaryButton from './PrimaryButton';
import PrimarySection from './PrimarySection';
import SectionTitle from './SectionTitle';

export default function ContactBanner({}) {
  return (
    <PrimarySection className="py-15 bg-gray-200">
      <Container>
        <div className="flex flex-col items-center gap-3">
          <p className="font-outfit text-xl">
            Ready to apply? Got more questions? We're here to help you every
            step of the way. Contact us now!
          </p>
          <PrimaryButton>Chat With Us Now!</PrimaryButton>
        </div>
      </Container>
    </PrimarySection>
  );
}
