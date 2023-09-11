import { component$, $ } from '@builder.io/qwik';

import css from './ProgramSection.module.scss';
import { ProgramCard, ProgramHeader, TrackMenu } from './components';
import SectionIntro from '~/routes/components/SectionIntro';
import { map } from 'lodash';
import { programs } from '~/db';
import SectionDivider from '../SectionDivider';

const ProgramSection = component$(() => {
  const handleMenuSelect = $(() => {});
  return (
    <section class={css.root}>
      <ProgramHeader />
      <SectionDivider />
      <SectionIntro
        sectionName="PROGRAM"
        title="FEConf 2023의 스피커와 프로그램을 소개합니다"
        description="국내 최대 프론트엔드 개발 컨퍼런스, FEConf는 2017년부터 프론트엔드 엔지니어의 다양한 도전과 경험을 주제로 프론트엔드 개발 커뮤니티가 서로 배우고, 함께 성장할 수 있는 생태계를 만들기 위해 노력하고 있습니다. 올해는 몰입(Flow)을 주제로 다양한 회사에서 활약하고 있는 프론트엔드 엔지니어들의 도전과 몰입, 그 과정에서 찾은 멋지고 흥미로운 이야기들을 준비했습니다. 10월 21일에 만나요!"
      />
      <TrackMenu selected="all" onSelect={handleMenuSelect} />
      <div class={css.programList}>
        {map(programs, (program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </section>
  );
});

export default ProgramSection;
