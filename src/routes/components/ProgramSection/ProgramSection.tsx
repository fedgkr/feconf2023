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
        title="프론트엔드 엔지니어의 다양한 도전과 경험"
        description="프론트엔드 엔지니어의 다양한 도전과 경험 프론트엔드 엔지니어의 다양한 도전과 경험 FEConf 파이팅"
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
