import { $, component$, useSignal } from '@builder.io/qwik';

import css from './HeroSection.module.scss';
import { Ellipse1, Ellipse2, Ellipse3 } from './components';

const HeroSection = component$(() => {
  const focusMode = useSignal(false);
  const handleClickSwitch = $(() => (focusMode.value = !focusMode.value));
  return (
    <>
      <section class={[css.root, { [css.on]: focusMode.value }]}>
        <div class={[css.container, { [css.on]: focusMode.value }]}>
          <div class={css.wrap}>
            <div
              class={[css.switch, { [css.on]: focusMode.value }]}
              onClick$={handleClickSwitch}
            >
              <div class={css.background} />
            </div>
          </div>
        </div>
      </section>
      <div class={[css.dim, { [css.on]: focusMode.value }]}>
        <Ellipse1 />
        <Ellipse2 />
        <Ellipse3 />
      </div>
    </>
  );
});

export default HeroSection;
