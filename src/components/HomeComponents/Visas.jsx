import { useVisas } from '../../data/useVisas';
import Container from '../Container';
import PrimarySection from '../PrimarySection';
import SectionTitle from '../SectionTitle';
import VisaCard from '../VisaCard';

export default function Visas() {
  const { visas } = useVisas();

  return (
    <PrimarySection className="mb-15 md:mb-20" id="visas">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="Visas we provide"
          className="mb-10 md:mb-15"
        >
          Visas We Can Help You With
        </SectionTitle>
        <div className="flex md:grid md:grid-cols-4 items-center justify-between gap-5 overflow-scroll">
          {visas?.map((visa, i) => (
            <VisaCard
              key={i}
              slug={visa?.slug}
              name={visa?.name}
              description={visa?.description}
              src={visa?.featuredImage}
            />
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
