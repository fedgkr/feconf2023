import { component$ } from '@builder.io/qwik';

import css from './CoCSection.module.scss';
import { SectionIntro } from '~/routes/components';

const CoCSection = component$(() => {
  return (
    <section class={css.root}>
      <SectionIntro
        sectionName="CODE OF CONDUCT"
        title="FEConf에 참여하는 모든 분은 다음 사항을 준수해 주세요"
        description="FEConf는 컨퍼런스에 참가하는 모든 사람이 환영받고 안전한 환경에서 서로 배우고, 성장하는 경험을 제공하기 위해 최선을 다하고 있습니다. 아래에 적힌 행동 가이드라인을 준수해주세요. FEConf의 발전을 위해 도움을 주실 분은 언제든 환영합니다. feconf@googlegroups.com 으로 메일을 보내주세요."
      />
    </section>
  );
});

export default CoCSection;
