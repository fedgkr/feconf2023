import { component$ } from '@builder.io/qwik';
import { HeroSection, ProgramSection } from './components';

export default component$(() => {
  return (
    <>
      <HeroSection />
      <ProgramSection />
    </>
  );
});
