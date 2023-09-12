import { component$ } from '@builder.io/qwik';

import css from './SectionDivider.module.scss';

interface Props {
  absolute?: boolean;
}

const SectionDivider = component$<Props>(({ absolute }) => {
  return <div class={[css.root, { [css.absolute]: absolute }]}></div>;
});

export default SectionDivider;
