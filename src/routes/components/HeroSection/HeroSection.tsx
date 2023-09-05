import { component$ } from '@builder.io/qwik';

import HeroLogo from './assets/hero-logo.png';

import css from './HeroSection.module.scss';
import { SafeLink } from '~/components';

const HeroSection = component$(() => {
  return (
    <>
      <section class={css.root}>
        <span class={css.sideText}>/* 2023.10.21 (Sat)</span>
        <div class={css.centerWrap}>
          <img class={css.logo} src={HeroLogo} alt="FEConf" />
          <div class={css.ctaSection}>
            <p class={css.description}>
              2023년, 프론트엔드 엔지니어들의
              <br />
              치열한 고민과 몰입에 관한 이야기
            </p>
            <SafeLink href="">
              <button class={css.button}>티켓 구매하기</button>
            </SafeLink>
          </div>
        </div>
        <span class={css.sideText}>Lotte Tower Sky 31 */</span>
      </section>
    </>
  );
});

export default HeroSection;
