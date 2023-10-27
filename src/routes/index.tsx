import { component$ } from '@builder.io/qwik';
import {
  BackgroundCanvas,
  CoCSection,
  HeroSection,
  OpensourceSection,
  ProgramSection,
  SponsorSection,
  TicketInfoSection,
  IndividualSponsorSection,
  Footer,
} from './components';
import { useVisible } from '~/hooks';
import {
  ProgramHeader,
  ProgramMobileHeader,
} from '~/routes/components/ProgramSection/components';

export default component$(() => {
  const { visible } = useVisible();
  return (
    <>
      <HeroSection />
      <ProgramMobileHeader />
      <ProgramHeader />
      <ProgramSection />
      <SponsorSection />
      <IndividualSponsorSection />
      <TicketInfoSection />
      <OpensourceSection />
      <CoCSection />
      <Footer />
      {visible && <BackgroundCanvas />}
    </>
  );
});
