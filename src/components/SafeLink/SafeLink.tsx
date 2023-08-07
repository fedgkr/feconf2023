import { component$, Slot } from '@builder.io/qwik';

interface Props {
  href?: string;
}

const SafeLink = component$<Props>(({ href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Slot />
    </a>
  );
});

export default SafeLink;
