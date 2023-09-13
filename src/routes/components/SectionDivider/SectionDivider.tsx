import { component$ } from '@builder.io/qwik';

import css from './SectionDivider.module.scss';
import { useVisible } from '~/hooks';

interface Props {
  absolute?: boolean;
  border?: boolean;
  gradient?: number;
}

const SectionDivider = component$<Props>(
  ({ absolute, border = true, gradient = 15 }) => {
    const { visible } = useVisible();
    return (
      <div
        class={[css.root, { [css.absolute]: absolute, [css.border]: border }]}
      >
        <div
          class={[css.gradient, { [css.visible]: visible }]}
          style={{
            background: `radial-gradient(50% ${gradient}% at 50% 0%, rgba(92, 75, 161, 0.24) 0%, rgba(92, 75, 161, 0) 100%)`,
          }}
        />
      </div>
    );
  }
);

export default SectionDivider;
