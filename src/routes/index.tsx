import { component$ } from '@builder.io/qwik';
import {
  BackgroundCanvas,
  CoCSection,
  HeroSection,
  OpensourceSection,
  ProgramSection,
  SponsorSection,
  TicketInfoSection,
  Footer,
} from './components';
import { useVisible } from '~/hooks';
import { ProgramMobileHeader } from '~/routes/components/ProgramSection/components';

export default component$(() => {
  const { visible } = useVisible();
  return (
    <>
      <HeroSection />
      <ProgramMobileHeader />
      <ProgramSection />
      <SponsorSection />
      <TicketInfoSection />
      <OpensourceSection />
      <CoCSection />
      <Footer />
      {visible && <BackgroundCanvas />}
    </>
  );
});
