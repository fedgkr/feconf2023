import { component$ } from '@builder.io/qwik';

import Logo from '~/assets/logo.png';

import css from './ProgramHeader.module.scss';

const ProgramHeader = component$(() => {
  return (
    <header class={css.root}>
      <span class={css.sideText}>/* 2023.10.21 (Sat)</span>
      <img class={css.logo} src={Logo} alt="FEConf" />
      <span class={css.sideText}>Lotte Tower Sky 31 */</span>
    </header>
  );
});

export default ProgramHeader;
