import { component$ } from '@builder.io/qwik';

import Logo from '~/assets/logo.png';

import css from './ProgramHeader.module.scss';
import { useVisible } from '~/hooks';

const ProgramHeader = component$(() => {
  const { visible } = useVisible();
  return (
    <header class={[css.root, 'fadeIn', { visible }]}>
      <span class={css.sideText}>/* 2023.10.21 (Sat)</span>
      <img width={69} height={30} class={css.logo} src={Logo} alt="FEConf" />
      <span class={css.sideText}>Lotte Tower Sky 31 */</span>
    </header>
  );
});

export default ProgramHeader;
