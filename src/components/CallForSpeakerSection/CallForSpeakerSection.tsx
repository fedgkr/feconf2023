import {
  $,
  component$,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';

import css from './CallForSpeakerSection.module.scss';
import { SafeLink } from '~/components';
import { CALL_FOR_SHARE_LINK } from '~/constants';

const CallForSpeakerSection = component$(() => {
  const containerRef = useSignal<Element>();
  const containerWidth = useSignal(0);
  const containerHeight = useSignal(0);
  const titleMatrix = useSignal('translateX(100%) scale(0.7)');
  const textMotion = useSignal(false);
  const scaleMotion = useSignal(0);
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
      const scrollValue = Math.max(scrollY - innerHeight - 1500, 0);
      const progress = scrollValue / innerHeight;
      // Title Progress
      const titleProgress = Math.min(progress / 3, 1);
      const startScale = 0.5;
      const scaleAmount = 0.5;
      const startX = 100;
      const distanceX = 200;
      const x = startX - distanceX * titleProgress;
      const scale = startScale + scaleAmount * titleProgress;
      titleMatrix.value = `translateX(${x}%) scale(${scale})`;
      const textProgress = progress - 3;
      // TextProgress
      textMotion.value = textProgress >= 0 && textProgress <= 2.5;
      // scaleMotion Progress
      scaleMotion.value = Math.max(Math.min(progress - 5.5, 1.5), 0);
    })
  );
  return (
    <section ref={containerRef} class={css.root}>
      <div class={css.titleWrap}>
        <h1 class={css.title} style={{ transform: `${titleMatrix.value}` }}>
          치열한 고민과 도전
        </h1>
      </div>
      <div class={[css.textWrap, { [css.on]: textMotion.value }]}>
        <h2>
          <span>당신 몰입한 순간,</span>
          <br />
          <span>잠재력을 발휘한 경험</span>
        </h2>
        <p>
          <span>프론트엔드 엔지니어의 흥미로운 도전과</span>
          <br />
          <span>개발에 몰입한 경험을 들려주세요.</span>
        </p>
        <SafeLink href={CALL_FOR_SHARE_LINK}>
          <button>스피커 신청하기</button>
        </SafeLink>
      </div>
      <div
        class={css.background}
        style={{
          transform: `translate(-50%, -50%) scale(${scaleMotion.value})`,
        }}
      />
    </section>
  );
});

export default CallForSpeakerSection;
