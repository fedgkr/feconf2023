import type { ClassList } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

interface Props {
  class?: ClassList;
  href?: string;
}

const SafeLink = component$<Props>(({ href, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      <Slot />
    </a>
  );
});

export default SafeLink;
