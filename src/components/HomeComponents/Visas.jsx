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
        <div className="flex md:grid md:grid-cols-4 items-center justify-between gap-5 overflow-scroll">
          <VisaCard
            slug="schengen-visa"
            name="Schengen Visa"
            description="Travel across 27 countries with one visa. Perfect for tourism & business"
            src="/schengen-visa.png"
          />
          <VisaCard
            slug="us-visa"
            name="US Visa"
            description="B1/B2 visit visa for tourists."
            src="/us-visa.png"
          />
          <VisaCard
            slug="uk-visa"
            name="UK Visa"
            description="Visit the UK for tourism, business, or family trips."
            src="/uk-visa.png"
          />
          <VisaCard
            slug="canada-visa"
            name="Canada Visa"
            description="Explore Canada for study, work, or travel."
            src="/canada-visa.png"
          />
          <VisaCard
            slug="turkiye-visa"
            name="Turkiye Visa"
            description="Explore Canada for study, work, or travel."
            src="/canada-visa.png"
          />
          <VisaCard
            slug="dubai-visa"
            name="Dubai Visa"
            description="Explore Canada for study, work, or travel."
            src="/canada-visa.png"
          />
          <VisaCard
            slug="saudi-visa"
            name="Saudi Arabia Visa"
            description="Explore Canada for study, work, or travel."
            src="/canada-visa.png"
          />
          <VisaCard
            slug="china-visa"
            name="China Visa"
            description="Explore Canada for study, work, or travel."
            src="/canada-visa.png"
          />
        </div>
      </Container>
    </PrimarySection>
  );
}
