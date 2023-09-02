import { component$ } from '@builder.io/qwik';
import {
  HeroSection,
  CallForSponsorSection,
  CallForSpeakerSection,
  Header,
} from './components';

export default component$(() => {
  return (
    <>
      <Header />
      <main style={{ height: '100%' }}>
        <HeroSection />
        <CallForSpeakerSection />
        <CallForSponsorSection />
      </main>
    </>
  );
});
