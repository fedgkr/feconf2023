import { component$ } from '@builder.io/qwik';

import css from './SectionDivider.module.scss';

const SectionDivider = component$(() => {
  return <div class={css.root}></div>;
});

export default SectionDivider;
