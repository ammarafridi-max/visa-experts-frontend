import { testimonials } from '../../data/testimonials';
import Container from '../Container';
import PrimarySection from '../PrimarySection';
import SectionTitle from '../SectionTitle';
import TestimonialCard from '../TestimonialCard';

export default function Testimonials() {
  return (
    <PrimarySection className="mb-15 md:mb-20" id="reviews">
      <Container>
        <SectionTitle subtitle="Testimonials" textAlign="center">
          What our customers say about us
        </SectionTitle>
        <div className="flex gap-5 overflow-x-scroll">
          {testimonials?.map((test, i) => (
            <TestimonialCard
              key={i}
              title={test.title}
              name={test.name}
              purpose={test.purpose}
            >
              {test.text}
            </TestimonialCard>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
