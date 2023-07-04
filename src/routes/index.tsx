import { component$ } from '@builder.io/qwik';
import {
  HeroSection,
  CallForSponsorSection,
  CallForSpeakerSection,
} from '~/components';

export default component$(() => {
  return (
    <>
      <HeroSection />
      <CallForSpeakerSection />
      <CallForSponsorSection />
    </>
  );
});
