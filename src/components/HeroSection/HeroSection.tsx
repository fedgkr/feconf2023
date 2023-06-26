import { $, component$, useSignal } from '@builder.io/qwik';

import css from './HeroSection.module.scss';
import { Switch } from './components';

const HeroSection = component$(() => {
  const focusMode = useSignal(false);
  const handleClickSwitch = $(() => {
    focusMode.value = !focusMode.value;
  });
  return (
    <section class={[css.root, { [css.on]: focusMode.value }]}>
      <div class={[css.container, { [css.on]: focusMode.value }]}>
        <div class={css.wrap}>
          <Switch on={focusMode.value} onChangeOn={handleClickSwitch} />
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
