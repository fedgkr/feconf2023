import type { ClassList } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

interface Props {
  class?: ClassList;
  href?: string;
  disabled?: boolean;
}

const SafeLink = component$<Props>(({ href, ...props }) => {
  if (props.disabled) {
    return (
      <button {...props} disabled={true}>
        <div style={{ opacity: 0.6 }}>
          <Slot />
        </div>
      </button>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      <Slot />
    </a>
  );
});

export default SafeLink;
