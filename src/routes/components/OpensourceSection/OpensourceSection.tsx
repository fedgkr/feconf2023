import { component$ } from '@builder.io/qwik';

import css from './OpensourceSection.module.scss';
import { SectionIntro } from '~/routes/components';

import babelLogo from './assets/babel.png';
import pretendardLogo from './assets/pretendard.png';

const OpensourceSection = component$(() => {
  return (
    <section class={css.root}>
      <SectionIntro
        sectionName="OPEN SOURCE"
        title="프론트엔드 개발 생태계를 위해 오픈소스를 후원합니다"
        description="새로운 무언가를 만들 때 오픈소스는 항상 우리 곁에 있습니다. 덕분에 복잡한 작업을 간편하게 처리하고 우리는 제품에 집중할 수 있습니다. 당연하게만 사용해온 프런트엔드 오픈소스 프로젝트에 감사의 의미를 담아 FEConf에서 후원을 진행합니다. 오픈소스 후원으로 웹 개발 생태계를 지원해나가요!"
      />
      <div class={css.list}>
        <img
          class={css.image}
          src={babelLogo}
          width={77}
          height={30}
          alt="Babel"
        />
        <img
          class={css.image}
          src={pretendardLogo}
          width={111}
          height={40}
          alt="Pretendard"
        />
      </div>
    </section>
  );
});

export default OpensourceSection;
