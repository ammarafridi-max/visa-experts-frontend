import { faqs } from '../../data/faqs';
import Container from '../Container';
import PrimarySection from '../PrimarySection';
import SectionTitle from '../SectionTitle';
import FAQAccordion from '../FAQAccordion';
import PrimaryButton from '../PrimaryButton';

export default function FAQs() {
  return (
    <PrimarySection className="mb-15 md:mb-20" id="faqs">
      <Container>
        <SectionTitle textAlign="center" subtitle="Frequently Asked Questions">
          Your Visa Questions, Answered Simply
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
