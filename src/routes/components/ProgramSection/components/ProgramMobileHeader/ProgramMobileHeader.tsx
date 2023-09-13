import { component$ } from '@builder.io/qwik';

import Logo from '~/assets/logo.png';

import css from './ProgramMobileHeader.module.scss';
import { useVisible } from '~/hooks';

const ProgramMobileHeader = component$(() => {
  const { visible } = useVisible();
  return (
    <header class={[css.root, 'fadeIn', { visible }]}>
      <div class={css.textWrap}>
        <img
          width={69}
          height={30}
          class={[css.logo, 'fadeIn', { visible }]}
          src={Logo}
          alt="FEConf"
        />
        <span class={[css.sideText, 'FamiljenGrotesk', 'fadeIn', { visible }]}>
          2023.10.21 (Sat)
        </span>
      </div>
      <button class={[css.button, 'fadeIn', { visible }]}>티켓 구매하기</button>
    </header>
  );
});

export default ProgramMobileHeader;
