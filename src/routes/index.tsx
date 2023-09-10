import { component$ } from '@builder.io/qwik';
import {
  CoCSection,
  HeroSection,
  OpensourceSection,
  ProgramSection,
  SponsorSection,
} from './components';

export default component$(() => {
  return (
    <>
      <HeroSection />
      <ProgramSection />
      <SponsorSection />
      <OpensourceSection />
      <CoCSection />
    </>
  );
});
