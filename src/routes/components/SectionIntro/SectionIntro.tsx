import { component$ } from '@builder.io/qwik';

import css from './SectionIntro.module.scss';

interface Props {
  sectionName: string;
  title: string;
  description: string;
}

const SectionIntro = component$<Props>(
  ({ sectionName, title, description }) => {
    return (
      <header class={css.root}>
        <h3>{sectionName}</h3>
        <h2 class={css.title}>{title}</h2>
        <p class={css.description} dangerouslySetInnerHTML={description} />
      </header>
    );
  }
);

export default SectionIntro;
