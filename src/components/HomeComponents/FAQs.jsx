import { faqs } from '../../data/faqs';
import Container from '../Container';
import PrimarySection from '../PrimarySection';
import SectionTitle from '../SectionTitle';
import FAQAccordion from '../FAQAccordion';
import PrimaryButton from '../PrimaryButton';

export default function FAQs() {
  return (
    <PrimarySection className="pb-15 md:mb-20">
      <Container>
        <SectionTitle textAlign="center" subtitle="Common Questions">
          Everything You Need to Know About Visas
        </SectionTitle>
        {faqs.map((faq, i) => {
          if (i < 6) {
            return (
              <FAQAccordion key={i} question={faq.question}>
                {faq.answer}
              </FAQAccordion>
            );
          }
        })}
        <div className="flex justify-center mt-10">
          <PrimaryButton>Read More FAQs</PrimaryButton>
        </div>
      </Container>
    </PrimarySection>
  );
}
