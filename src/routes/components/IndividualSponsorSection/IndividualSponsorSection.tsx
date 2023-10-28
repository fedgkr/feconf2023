import { component$ } from '@builder.io/qwik';

import { SectionDivider, SectionIntro } from '~/routes/components';
import { useVisible } from '~/hooks';

import css from './IndividualSponsorSection.module.scss';
import map from 'lodash/map';

const sponsorList = [
  '권경태',
  '김규태',
  '김동철',
  '김민섭',
  '김민찬',
  '김범석',
  '김안나',
  '김지호',
  '김태희',
  '노유리',
  '두선아',
  '민순기',
  '박성민',
  '박인호',
  '박현범',
  '배소희',
  '서승한',
  '서주현',
  '성승규',
  '송문혁',
  '송하영',
  '신지섭',
  '여찬규',
  '유창헌',
  '윤세일',
  '이광기',
  '이상빈',
  '이수화',
  '이우재',
  '이하은',
  '이현빈',
  '이희진',
  '임주영',
  '장원석',
  '정지관',
  '조현우',
  '진태양',
  '차하늘',
  '최아람',
  '한상훈',
];

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
      <div class={css.sponsorList}>
        {map(sponsorList, (sponsor, index) => (
          <span
            key={index}
            class={[css.sponsor, 'fadeInRightSlide', { visible }]}
            style={{ transitionDelay: `${index * 15}ms` }}
          >
            {sponsor}
          </span>
        ))}
      </div>
    </section>
  );
});

export default IndividualSponsorSection;
