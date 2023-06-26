import { component$ } from '@builder.io/qwik';

import css from './Switch.module.scss';

interface Props {
  on: boolean;
  onChangeOn: () => void;
}

const Switch = component$<Props>(({ on, onChangeOn }) => {
  return (
    <div class={[css.root, { [css.on]: on }]} onClick$={onChangeOn}>
      <div class={css.knob} />
      <div class={css.background} />
    </div>
  );
});

export default Switch;
