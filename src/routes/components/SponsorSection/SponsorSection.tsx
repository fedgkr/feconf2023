import { component$ } from '@builder.io/qwik';
import SectionIntro from '~/routes/components/SectionIntro';

import css from './SponsorSection.module.scss';
import { SponsorList } from '~/routes/components/SponsorSection/components';

const SponsorSection = component$(() => {
  return (
    <section class={css.root}>
      <SectionIntro
        sectionName="SPONSORS"
        title="FEConf와 함께 하는 기업을 소개합니다"
        description="2023년, 7번째 FEConf를 함께 빛내주는 후원사를 소개합니다. 이 기업들은 프론트엔드 분야에서 혁신을 주도하며 최신 기술과 트렌드를 발전시키고 있습니다. 아래 로고에 연결된 링크에서 후원사의 프로덕트와 채용 기회에 대해서 더 자세하게 알아보세요."
      />
      <div class={css.sponsorList}>
        <SponsorList grade="DIAMOND" list={[]} />
        <SponsorList grade="PLATINUM" list={[]} />
        <SponsorList grade="GOLD" list={[]} />
        <SponsorList grade="ROOKIE" list={[]} />
      </div>
    </section>
  );
});

export default SponsorSection;