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
  const scrollRatio = useSignal(0);
  const focusMode = useSignal(false);
  const handleClickSwitch = $(() => {
    focusMode.value = !focusMode.value;
  });
  useVisibleTask$(() => {
    history.scrollRestoration = 'manual';
    if (containerRef.value) {
      const rect = containerRef.value.getBoundingClientRect();
      containerWidth.value = Math.round(rect.width);
      containerHeight.value = Math.round(rect.height);
    }
  });
  useVisibleTask$(({ track }) => {
    const focused = track(() => focusMode.value);
    if (focused) {
      document.body.style.backgroundColor = 'white';
    }
  });
  useOnWindow(
    'scroll',
    $(() => {
      if (window.scrollY > 20) {
        focusMode.value = true;
      }
      const start = 100;
      const value = Math.max(window.scrollY - start, 0);
      scrollRatio.value = Math.min(value / containerHeight.value, 1.5);
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
            <Switch on={focusMode.value} onChangeOn={handleClickSwitch} />
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
        style={{ transform: `scale(${scrollRatio.value})` }}
      />
    </>
  );
});

export default HeroSection;
