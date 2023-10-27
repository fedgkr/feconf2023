import { component$ } from '@builder.io/qwik';

import { SectionDivider, SectionIntro } from '~/routes/components';
import { useVisible } from '~/hooks';

import css from './IndividualSponsorSection.module.scss';

const IndividualSponsorSection = component$(() => {
  const { visible } = useVisible();
  return (
    <section class={css.root}>
      <SectionDivider />
      <SectionIntro
        sectionName="individual Sponsors"
        title="FEConf의 개인 후원자를 소개합니다"
        description="2023년, 7번째 FEConf를 함께 만들어주신 특별한 개인 후원자 분들을 소개합니다."
      />
    </section>
  );
});

export default IndividualSponsorSection;
