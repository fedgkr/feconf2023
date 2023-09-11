import { component$ } from '@builder.io/qwik';
import {
  CoCSection,
  HeroSection,
  OpensourceSection,
  ProgramSection,
  SponsorSection,
  TicketInfoSection,
  Footer,
} from './components';

export default component$(() => {
  return (
    <>
      <HeroSection />
      <ProgramSection />
      <SponsorSection />
      <TicketInfoSection />
      <OpensourceSection />
      <CoCSection />
      <Footer />
    </>
  );
});
