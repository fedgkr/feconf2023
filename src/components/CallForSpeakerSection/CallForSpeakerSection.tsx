import {
  $,
  component$,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';

import css from './CallForSpeakerSection.module.scss';
import { easeOutBounce } from '~/utils/timingFunctions';

const CallForSpeakerSection = component$(() => {
  const containerRef = useSignal<Element>();
  const containerWidth = useSignal(0);
  const containerHeight = useSignal(0);
  const titleMatrix = useSignal('translateX(100%) scale(0.7)');
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
      const { scrollY, innerHeight } = window;
      const scrollValue = Math.max(scrollY - innerHeight, 0);
      const duration = window.innerHeight * 3;
      const progress = easeOutBounce(Math.min(scrollValue / duration, 1));
      const startScale = 0.5;
      const scaleAmount = 0.5;
      const startX = 100;
      const distanceX = 200;
      const x = startX - distanceX * progress;
      const scale = startScale + scaleAmount * progress;
      titleMatrix.value = `translateX(${x}%) scale(${scale})`;
    })
  );
  return (
    <section ref={containerRef} class={css.root}>
      <div class={css.titleWrap}>
        <h1 class={css.title} style={{ transform: `${titleMatrix.value}` }}>
          치열한 고민과 도전
        </h1>
      </div>
      <div class={css.background}></div>
    </section>
  );
});

export default CallForSpeakerSection;
