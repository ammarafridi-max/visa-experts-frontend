import Container from '../Container';
import PrimarySection from '../PrimarySection';
import SectionTitle from '../SectionTitle';
import VisaCard from '../VisaCard';

export default function Visas() {
  return (
    <PrimarySection className="mb-15 md:mb-20">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="Visas we provide"
          className="mb-10 md:mb-15"
        >
          Visas We Can Help You With
        </SectionTitle>
        <div className="flex items-center justify-between gap-5 overflow-scroll">
          <VisaCard
            name="Schengen Visa"
            description="Travel across 27 countries with one visa. Perfect for tourism & business"
            src="/schengen-visa.png"
          />
          <VisaCard
            name="US Visa"
            description="B1/B2 visit visa for tourists."
            src="/us-visa.png"
          />
          <VisaCard
            name="UK Visa"
            description="Visit the UK for tourism, business, or family trips."
            src="/uk-visa.png"
          />
          <VisaCard
            name="Canada Visa"
            description="Explore Canada for study, work, or travel."
            src="/canada-visa.png"
          />
        </div>
      </Container>
    </PrimarySection>
  );
}
