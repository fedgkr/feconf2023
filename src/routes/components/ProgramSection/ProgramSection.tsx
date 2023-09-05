import { component$, $ } from '@builder.io/qwik';

import css from './ProgramSection.module.scss';
import { ProgramHeader, ProgramIntro, TrackMenu } from './components';

const ProgramSection = component$(() => {
  const handleMenuSelect = $(() => {});
  return (
    <section class={css.root}>
      <ProgramHeader />
      <ProgramIntro />
      <TrackMenu selected="all" onSelect={handleMenuSelect} />
    </section>
  );
});

export default ProgramSection;
