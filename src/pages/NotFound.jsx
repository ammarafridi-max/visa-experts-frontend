import { BsExclamationLg } from 'react-icons/bs';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import PrimarySection from '../components/PrimarySection';
import PrimaryLink from '../components/PrimaryLink';
import PrimaryLinkOutline from '../components/PrimaryLinkOutline';

export default function NotFound() {
  return (
    <PrimarySection className="py-15">
      <Container>
        <div className="w-28 h-28 md:w-36 md:h-36 mx-auto flex items-center justify-center rounded-full bg-purple-900 mb-5">
          <BsExclamationLg className="text-[70px] text-primary-50" />
        </div>
        <PageTitle className="text-center">Page Not Found</PageTitle>
        <p className="text-center mt-6 mb-8 font-outfit text-lg md:text-2xl font-light">
          Oops! The page you’re looking for doesn’t exist. It might have been
          moved, deleted, or the URL could be typed incorrectly.
        </p>
        <div className="flex gap-2 md:gap-3 items-center justify-center">
          <PrimaryLink to="/">Back to Home</PrimaryLink>
          <PrimaryLinkOutline to="mailto:info@visawadi.com">
            Send Us an Email
          </PrimaryLinkOutline>
        </div>
      </Container>
    </PrimarySection>
  );
}
