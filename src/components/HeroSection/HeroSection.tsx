import { $, component$, useSignal } from '@builder.io/qwik';

import css from './HeroSection.module.scss';
import { Switch } from './components';

const HeroSection = component$(() => {
  const focusMode = useSignal(false);
  const handleClickSwitch = $(() => {
    focusMode.value = !focusMode.value;
  });
  return (
    <section class={css.root}>
      <div class={css.container}>
        <div class={css.wrap}>
          <Switch on={focusMode.value} onChangeOn={handleClickSwitch} />
          <div class={[css.overlay, { [css.on]: focusMode.value }]} />
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
