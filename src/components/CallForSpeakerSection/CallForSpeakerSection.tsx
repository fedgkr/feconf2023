import {
  $,
  component$,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';

import css from './CallForSpeakerSection.module.scss';

const CallForSpeakerSection = component$(() => {
  const containerRef = useSignal<Element>();
  const containerWidth = useSignal(0);
  const containerHeight = useSignal(0);
  const titleTranslateX = useSignal('100%');
  useVisibleTask$(() => {
    if (containerRef.value) {
      const rect = containerRef.value.getBoundingClientRect();
      containerWidth.value = Math.round(rect.width);
      containerHeight.value = Math.round(rect.height);
    }
  });
  useOnWindow(
    'scroll',
    $(() => {
      const scrollValue = Math.max(window.scrollY - window.innerHeight, 0);
      const duration = window.innerHeight * 3;
      const progress = Math.min(scrollValue / duration, 1);
      const start = 100;
      const distance = 200;
      const translateX = start - distance * progress;
      titleTranslateX.value = `${translateX}%`;
    })
  );
  return (
    <section ref={containerRef} class={css.root}>
      <div class={css.titleWrap}>
        <h1
          class={css.title}
          style={{ transform: `translateX(${titleTranslateX.value})` }}
        >
          치열한 고민과 도전
        </h1>
      </div>
      <div class={css.background}></div>
    </section>
  );
});

export default CallForSpeakerSection;
