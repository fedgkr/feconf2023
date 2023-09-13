import { component$ } from '@builder.io/qwik';

import { SafeLink, Start } from '~/components';

import HeroLogo from './assets/hero-logo.png';
import css from './HeroSection.module.scss';
import End from '~/components/End';
import { SectionDivider } from '~/routes/components';
import { TICKET_LINK } from '~/db';

const HeroSection = component$(() => {
  return (
    <>
      <section class={css.root}>
        <SectionDivider absolute={true} />
        <div class={css.desktop}>
          <span class={css.sideText}>
            <Start /> 2023.10.21 (Sat)
          </span>
          <div class={css.centerWrap}>
            <img
              width={320}
              height={140}
              class={css.logo}
              src={HeroLogo}
              alt="FEConf"
            />
            <div class={css.ctaSection}>
              <p class={css.description}>
                2023년, 프론트엔드 엔지니어들의
                <br />
                치열한 고민과 몰입에 관한 이야기
              </p>
              <SafeLink href={TICKET_LINK}>
                <button class={css.button}>티켓 구매하기</button>
              </SafeLink>
            </div>
          </div>
          <span class={css.sideText}>
            Lotte Tower Sky 31 <End />
          </span>
        </div>
        <div class={css.mobile}>
          <div class={css.logoWrap}>
            <Start />
            <img
              width={320}
              height={140}
              class={css.logo}
              src={HeroLogo}
              alt="FEConf"
            />
            <End />
          </div>
          <div class={css.info}>
            <span class={css.date}>2023.10.21 (Sat)</span>
            <span class={css.location}>Lotte Tower Sky 31</span>
          </div>
          <p class={css.description}>
            2023년, 프론트엔드 엔지니어들의
            <br />
            치열한 고민과 몰입에 관한 이야기
          </p>
          <SafeLink href={TICKET_LINK}>
            <button class={css.button}>티켓 구매하기</button>
          </SafeLink>
        </div>
      </section>
    </>
  );
});

export default HeroSection;
