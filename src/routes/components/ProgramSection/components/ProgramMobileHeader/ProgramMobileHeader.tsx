import { $, component$, useOnWindow, useSignal } from '@builder.io/qwik';

import Logo from '~/assets/logo.png';

import css from './ProgramMobileHeader.module.scss';
import { SafeLink } from '~/components';
import { TICKET_LINK } from '~/db';

const ProgramMobileHeader = component$(() => {
  const element = useSignal<Element>();
  const visible = useSignal(false);
  useOnWindow(
    'scroll',
    $(() => {
      if (!element.value) return;
      const { top } = element.value.getBoundingClientRect();
      visible.value = top < 100;
    })
  );
  return (
    <header
      ref={element}
      class={[css.root, 'fadeIn', { visible: visible.value }]}
    >
      <div class={css.textWrap}>
        <img
          width={69}
          height={30}
          class={[css.logo, 'fadeIn', { visible: visible.value }]}
          src={Logo}
          alt="FEConf"
        />
        <span
          class={[
            css.sideText,
            'FamiljenGrotesk',
            'fadeIn',
            { visible: visible.value },
          ]}
        >
          2023.10.21 (Sat)
        </span>
      </div>
      <SafeLink
        href={TICKET_LINK}
        class={[css.button, 'fadeIn', { visible: visible.value }]}
        disabled={true}
      >
        Sold Out
      </SafeLink>
    </header>
  );
});

export default ProgramMobileHeader;
