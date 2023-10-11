import { component$, useSignal } from '@builder.io/qwik';

import { SafeLink, Start } from '~/components';

import HeroLogo from './assets/hero-logo.png';
import css from './HeroSection.module.scss';
import End from '~/components/End';
import { SectionDivider } from '~/routes/components';
import { TICKET_LINK } from '~/db';
import { useVisible } from '~/hooks';

const HeroSection = component$(() => {
  const containerRef = useSignal<Element>();
  const { visible } = useVisible();
  return (
    <>
      <section ref={containerRef} class={css.root}>
        <SectionDivider absolute={true} gradient={80} border={false} />
        <div class={css.desktop}>
          <span
            class={[
              css.sideText,
              'FamiljenGrotesk',
              'fadeInUpSlide',
              'delay300',
              { visible },
            ]}
          >
            <Start /> 2023.10.21 (Sat)
          </span>
          <div class={css.centerWrap}>
            <img
              width={320}
              height={140}
              class={[css.logo, 'fadeInUpSlide', { visible }]}
              src={HeroLogo}
              alt="FEConf"
            />
            <div class={[css.ctaSection]}>
              <p
                class={[
                  css.description,
                  'fadeInUpSlide',
                  'delay100',
                  { visible },
                ]}
              >
                2023년, 프론트엔드 엔지니어들의
                <br />
                치열한 고민과 몰입에 관한 이야기
              </p>
              <SafeLink
                href={TICKET_LINK}
                disabled={true}
                class={[css.button, 'fadeInUpSlide', 'delay200', { visible }]}
              >
                <BorderMaskBox />
                <span>Sold Out</span>
              </SafeLink>
            </div>
          </div>
          <span
            class={[
              css.sideText,
              'FamiljenGrotesk',
              'fadeInUpSlide',
              'delay300',
              { visible },
            ]}
          >
            Lotte Tower Sky 31 <End />
          </span>
        </div>
        <div class={css.mobile}>
          <div class={[css.logoWrap, 'fadeInUpSlide', { visible }]}>
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
            <span class={[css.date, 'fadeInUpSlide', 'delay100', { visible }]}>
              2023.10.21 (Sat)
            </span>
            <span
              class={[css.location, 'fadeInUpSlide', 'delay200', { visible }]}
            >
              Lotte Tower Sky 31
            </span>
          </div>
          <p
            class={[css.description, 'fadeInUpSlide', 'delay300', { visible }]}
          >
            2023년, 프론트엔드 엔지니어들의
            <br />
            치열한 고민과 몰입에 관한 이야기
          </p>
          <SafeLink
            href={TICKET_LINK}
            class={[css.button, 'fadeInUpSlide', 'delay400', { visible }]}
            disabled={true}
          >
            <BorderMaskBox />
            <span>Sold Out</span>
          </SafeLink>
        </div>
      </section>
    </>
  );
});

function BorderMaskBox() {
  return (
    <div class={[css.borderMaskRoot]}>
      <div class={[css.borderMask]}>
      </div>
    </div>
  );
}

export default HeroSection;
