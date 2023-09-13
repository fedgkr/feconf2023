import { component$ } from '@builder.io/qwik';

import css from './CoCSection.module.scss';
import { SectionDivider, SectionIntro } from '~/routes/components';
import map from 'lodash/map';
import { useVisible } from '~/hooks';

const codeList = [
  {
    title: '다양성',
    content:
      'FEConf는 개개인의 정체성과 개성 및 취향을 존중합니다. 하지만 성별, 성 정체성, 외모, 인종, 종교, 지역, 장애, 나이, 국가, 약자 등에 대한 혐오와 폭력은 어떤 방식이라도 허용하지 않습니다.',
  },
  {
    title: '사회적 책임',
    content:
      'FEConf참여자는 프론트엔드 분야의 성장에 대한 사회적 책임을 가집니다. 내가 알고 있는 지식은 아무리 작은 것이라도 다른 누군가에 도움을 줄 수 있습니다. 이를 다양한 방법으로 공유하세요.',
  },
  {
    title: '서로 돕고 협력하기',
    content:
      '참여자의 다양한 배경이 협업과 커뮤니케이션을 방해하는 요소가 될 수 없습니다. 도움을 요청하기 전에 먼저 도움을 주고 자신의 생각을 자유롭게 표현할 수 있는 FEConf가 될 수 있도록 노력해 주세요.',
  },
  {
    title: '지식 재산권 및 개인 정보',
    content:
      'FEConf는 지식 재산권과 개인 정보 등의 권리를 존중합니다. 지식 재산권을 위배하거나 개인 정보를 침해하는 어떠한 콘텐츠도FEConf에서 사용할 수 없습니다.',
  },
];

const CoCSection = component$(() => {
  const { visible } = useVisible();
  return (
    <section class={css.root}>
      <SectionDivider />
      <SectionIntro
        sectionName="CODE OF CONDUCT"
        title="FEConf에 참여하는 모든 분은<br/> 다음 사항을 준수해 주세요"
        description="FEConf는 컨퍼런스에 참가하는 모든 사람이 환영받고 안전한 환경에서 서로 배우고, 성장하는 경험을 제공하기 위해 최선을 다하고 있습니다. 아래에 적힌 행동 가이드라인을 준수해주세요. FEConf의 발전을 위해 도움을 주실 분은 언제든 환영합니다. feconf@googlegroups.com 으로 메일을 보내주세요."
      />
      <ul class={css.list}>
        {map(codeList, ({ title, content }, key) => (
          <li key={key}>
            <div
              class={[css.info, 'fadeInRightSlide', { visible }]}
              style={{ transitionDelay: `${key * 100}ms` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  d="M3.89008 7.72949C2.60091 7.72949 1.55675 8.77366 1.55675 10.0628C1.55675 11.352 2.60091 12.3962 3.89008 12.3962C5.17925 12.3962 6.22342 11.352 6.22342 10.0628C6.22342 8.77366 5.17925 7.72949 3.89008 7.72949ZM7.37842 8.31283V11.8128C7.37842 12.1337 7.64091 12.3962 7.96175 12.3962H11.4617C11.7826 12.3962 12.0451 12.1337 12.0451 11.8128V8.31283C12.0451 7.99199 11.7826 7.72949 11.4617 7.72949H7.96175C7.64091 7.72949 7.37842 7.99199 7.37842 8.31283ZM3.37091 2.22866L1.44591 5.69366C1.23008 6.08449 1.51008 6.56283 1.95341 6.56283H5.80341C6.24675 6.56283 6.52675 6.08449 6.31091 5.69366L4.38591 2.22866C4.16425 1.83199 3.59258 1.83199 3.37091 2.22866ZM11.0242 1.60449C10.4059 1.60449 9.96842 1.93116 9.71175 2.28699C9.45508 1.93116 9.01758 1.60449 8.39925 1.60449C7.48925 1.60449 6.79508 2.35116 6.79508 3.20866C6.79508 4.27616 7.97925 5.05783 9.33258 6.23033C9.54842 6.41699 9.86925 6.41699 10.0909 6.23033C11.4442 5.05783 12.6284 4.27616 12.6284 3.20866C12.6284 2.35116 11.9342 1.60449 11.0242 1.60449Z"
                  fill="white"
                />
              </svg>
              <div class={css.title}>{title}</div>
            </div>
            <p
              class={[css.content, 'fadeInRightSlide', { visible }]}
              style={{ transitionDelay: `${key * 100 + 100}ms` }}
            >
              {content}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default CoCSection;