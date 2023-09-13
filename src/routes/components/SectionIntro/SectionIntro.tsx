import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import css from './SectionIntro.module.scss';

interface Props {
  sectionName: string;
  title: string;
  description: string;
}

const SectionIntro = component$<Props>(
  ({ sectionName, title, description }) => {
    const visible = useSignal(false);
    useVisibleTask$(() => {
      visible.value = true;
    });
    return (
      <header class={[css.root]}>
        <h3
          class={[
            'fadeInUpSlide',
            'FamiljenGrotesk',
            { visible: visible.value },
          ]}
        >
          {sectionName}
        </h3>
        <h2
          class={[
            css.title,

            'fadeInUpSlide',
            'delay100',
            { visible: visible.value },
          ]}
          dangerouslySetInnerHTML={title}
        />
        <p
          class={[
            css.description,
            'fadeInUpSlide',
            'delay200',
            { visible: visible.value },
          ]}
          dangerouslySetInnerHTML={description}
        />
      </header>
    );
  }
);

export default SectionIntro;
