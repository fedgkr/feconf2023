import {
  $,
  component$,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';

import css from './HeroSection.module.scss';
import { Switch } from './components';

const HeroSection = component$(() => {
  const containerRef = useSignal<Element>();
  const containerWidth = useSignal(0);
  const containerHeight = useSignal(0);
  const scaleMotion = useSignal(0);
  const scroll = useSignal(0);
  const scrollRatio = useSignal(0);
  const scrollFocusMode = useSignal(false);
  const focusMode = useSignal(false);
  const handleClickSwitch = $(() => {
    document.body.style.transition = `background-color 0s var(--main-animation-duration)`;
    document.body.style.backgroundColor = 'white';
    focusMode.value = true;
  });
  useVisibleTask$(() => {
    history.scrollRestoration = 'manual';
    if (containerRef.value) {
      const rect = containerRef.value.getBoundingClientRect();
      containerWidth.value = Math.round(rect.width);
      containerHeight.value = Math.round(rect.height);
    }
  });
  // useVisibleTask$(({ track }) => {
  //   const focused = track(() => focusMode.value);

  //   if (focused) {
  //   }
  // });
  useOnWindow(
    'scroll',
    $(() => {
      scroll.value = window.scrollY;
      
      if (scroll.value > 50) {
        scrollFocusMode.value = true;
      }
      const start = 300;
      const value = Math.max(window.scrollY - start, 0);
      scaleMotion.value = Math.min(value / containerHeight.value, 1.5);
    })
  );
  return (
    <>
      <section
        ref={containerRef}
        class={[css.root, { [css.on]: focusMode.value }]}
      >
        <div class={css.container}>
          <div class={css.wrap}>
            <Switch on={focusMode.value} scroll={scrollFocusMode.value} onChangeOn={handleClickSwitch} />
            <div class={css.overlay} />
          </div>
        </div>
      </section>
      <div class={['stretch', css.textWrap, { [css.on]: focusMode.value }]}>
        <h2>FEConf23</h2>
        <p>
          국내 최대 프론트엔드 개발 컨퍼런스,
          <br />
          FEConf가 10월에 찾아옵니다.
        </p>
      </div>
      <div
        class={css.background}
        style={{
          transform: `translate(-50%, -50%) scale(${scaleMotion.value})`,
        }}
      />
    </>
  );
});

export default HeroSection;
