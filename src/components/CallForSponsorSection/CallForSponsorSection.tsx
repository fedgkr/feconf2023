import {
  $,
  component$,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';

import css from './CallForSponsorSection.module.scss';
import { CALL_FOR_SPONSOR_LINK, EVENT_DATE_STR } from '~/constants';
import { SafeLink } from '~/components';

const CallForSponsorSection = component$(() => {
  const containerRef = useSignal<Element>();
  const containerWidth = useSignal(0);
  const containerHeight = useSignal(0);
  const titleMatrix = useSignal('translateX(100%) scale(0.7)');
  const textMotion = useSignal(false);
  const footerMotion = useSignal(false);
  useVisibleTask$(() => {
    if (containerRef.value) {
      const rect = containerRef.value.getBoundingClientRect();
      containerWidth.value = Math.round(rect.width);
      containerHeight.value = Math.round(rect.height);
    }
  });
  useOnWindow(
    'scroll',
    $(() => {
      const { scrollY, innerHeight } = window;
      const scrollValue = Math.max(scrollY - innerHeight * 6 - 1500, 0);
      const progress = scrollValue / innerHeight;
      // Title Progress
      const titleProgress = Math.min(progress / 2, 1);
      const startScale = 0.5;
      const scaleAmount = 0.5;
      const startX = 100;
      const distanceX = 200;
      const x = startX - distanceX * titleProgress;
      const scale = startScale + scaleAmount * titleProgress;
      titleMatrix.value = `translateX(${x}%) scale(${scale})`;
      // TextProgress
      const textProgress = progress - 2;
      textMotion.value = textProgress >= 0 && textProgress <= 2.5;
      const footerProgress = progress - 4.5;
      footerMotion.value = footerProgress > 0;
    })
  );
  return (
    <section ref={containerRef} class={css.root}>
      <div class={css.titleWrap}>
        <h1 class={css.title} style={{ transform: `${titleMatrix.value}` }}>
          23년을 함께 빛낼 후원사
        </h1>
      </div>
      <div class={[css.textWrap, { [css.on]: textMotion.value }]}>
        <h2>
          <span>FE 생태계와 함께하는</span>
          <br />
          <span>후원사가 되어주세요</span>
        </h2>
        <p>
          <span>FEConf 파트너가 되어 개발 문화를 만들고,</span>
          <br />
          <span>기업 홍보와 채용 활동을 계획하세요.</span>
        </p>
        <SafeLink href={CALL_FOR_SPONSOR_LINK}>
          <button>파트너 신청하기</button>
        </SafeLink>
      </div>
      <div class={[css.footer, { [css.on]: footerMotion.value }]}>
        <img src="/images/feconf.png" alt="FEConf2023" />
        <p>{EVENT_DATE_STR}, 잠실 롯데타워에서 만나요!</p>
      </div>
    </section>
  );
});

export default CallForSponsorSection;
