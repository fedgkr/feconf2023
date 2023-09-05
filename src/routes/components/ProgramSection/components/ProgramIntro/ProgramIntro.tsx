import { component$ } from '@builder.io/qwik';

import css from './ProgramIntro.module.scss';

const ProgramIntro = component$(() => {
  return (
    <header class={css.root}>
      <h3>PROGRAM</h3>
      <h2 class={css.title}>프론트엔드 엔지니어의 다양한 도전과 경험</h2>
      <p class={css.description}>
        프론트엔드 엔지니어의 다양한 도전과 경험 프론트엔드 엔지니어의 다양한
        도전과 경험 FEConf 파이팅
      </p>
    </header>
  );
});

export default ProgramIntro;
