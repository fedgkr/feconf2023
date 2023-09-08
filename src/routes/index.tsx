import { component$ } from '@builder.io/qwik';
import { HeroSection, ProgramSection, SponsorSection } from './components';

export default component$(() => {
  return (
    <>
      <HeroSection />
      <ProgramSection />
      <SponsorSection />
    </>
  );
});
