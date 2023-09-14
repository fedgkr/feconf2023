import type { Program } from '~/types';
import { ProgramType } from '~/types';

const programs: Program[] = [
  {
    type: ProgramType.A,
    order: 1,
    title: 'React 바깥의 프론트엔드',
    description:
      '2023년의 프론트엔드 개발은 사실상 React로 천하 통일되었습니다. 그런데, 우리는 정말 각자의 문제를 푸는 데에 React가 필요해서, 혹은 React가 가장 적절한 도구라서 사용하고 있을까요? 프론트엔드 애플리케이션을 구성하기 위한 다양한 선택지들을 살펴보고, React 안팎의 프론트엔드 생태계를 둘러보면서, 각자의 문제를 푸는 데에 가장 적절한 도구를 찾아가 보는 시간을 가져보려 합니다.',
    speaker: {
      name: '신의하',
      company: '포트원',
    },
  },
  {
    type: ProgramType.B,
    order: 1,
    title: '웹 기반 그래픽 편집기의 구조와 7가지 디자인 패턴',
    description:
      '지금처럼 새로운 기술이 쏟아지는 시대일수록 그 바탕에 있는 기본 기술이 더욱 중요하다고 생각합니다. 디자인 패턴은 그 기본 기술 중의 하나라고 생각합니다. 그러나 디자인 패턴은 실무에 적용하려고 할 때 막막한 경우가 많습니다. 그래픽 편집기는 디자인 패턴을 실무적 관점에서 이해하기 좋은 예제입니다. UI 프로토타이핑 도구, 이미지 편집기, ML 데이터 어노테이션 도구 등 다양한 웹 기반 그래픽 편집기 개발 경험을 바탕으로 웹 기반 그래픽 편집기의 기본 구조와 그 안에 녹아 있는 다양한 디자인 패턴을 실무에 적용할 수 있도록 그림과 코드 위주로 공유해 드리고자 합니다.',
    speaker: {
      name: '심흥운',
      company: 'Naver',
    },
  },
  {
    type: ProgramType.Sponsor,
    order: 1,
    title: '토스커뮤니티 프론트엔드 엔지니어의 성장',
    description: '',
    speaker: {
      name: '토스',
      company: '토스',
    },
  },
  {
    type: ProgramType.A,
    order: 2,
    title: 'use 훅이 바꿀 리액트 비동기 처리의 미래 맛보기',
    description:
      'React 18에 Suspense가 정식 도입 되었지만, 아직 Suspense를 트리거할 use 훅은 출시되지 않았습니다. 정식 출시될 use훅이 바꿀 리액트에서 데이터 로딩의 미래를 소개하고, 이를 활용해 쿠키런: 킹덤의 어드민 툴용 게임 리소스 데이터 로더를 효율적으로 개선한 경험을 공유합니다.',
    speaker: {
      name: '문태근',
      company: '데브시스터즈',
    },
  },
  {
    type: ProgramType.B,
    order: 2,
    title: 'SSR 환경(Node.js) 메모리 누수 디버깅 가이드',
    description:
      'SSR 도입하는 회사들이 꽤 많아지다 보니 Node.js 환경에서 메모리 누수(memory leak)를 디버깅해야 하는 상황이 종종 발생하는 것 같아요. 크롬 브라우저의 메모리 프로파일링 기능들에 대한 설명과 메모리릭을 찾아가는 과정을 통해 메모리릭이 디버깅에 막막함을 덜어드리고자 합니다.',
    speaker: {
      name: '박지혜',
      company: '토스플레이스',
    },
  },
  {
    type: ProgramType.Sponsor,
    order: 2,
    title: '쿼타랩 라이브 토크쇼 : 일 잘 하는 개발자는 무엇일까?',
    description: '',
    speaker: {
      name: 'Quotabook',
      company: 'Quotabook',
    },
  },
  {
    type: ProgramType.A,
    order: 3,
    title: '몇 천 페이지의 유저 가이드를 새로 만들며',
    description:
      '"처음에는 쉽다고 생각했는데..."<br/>' +
      '"\'유저 가이드\'에 이렇게까지 많은 엔지니어링 포인트가 숨어있을 줄은 몰랐지..."<br/>' +
      '<br/>' +
      '몇천 페이지의 콘텐츠를 제공하는 유저 가이드를 처음부터 새로 만들며 만난 엔지니어링 문제들을 이야기합니다. 웹 접근성의 구현, 빌드 속도의 향상, Next.js App Router 등의 얼리 스테이지 기술 사용 사례를 짚어봅니다. 이를 통해 제품의 특성을 파악하고 복잡도를 제어하며 프론트엔드 개발자로서 성장하는 방법을 함께 이야기하고자 합니다.',
    speaker: {
      name: '이찬희',
      company: 'AB180',
    },
  },
  {
    type: ProgramType.B,
    order: 3,
    title:
      'Vue+express였던 서비스가 이세계에선 Next.js? (프레임워크 마이그레이션)',
    description:
      'Vue 기반의 애플리케이션에서 next.js 로 전환한 경험을 공유합니다. 점진적인 마이그레이션을 위한 인프라를 구축해 봅니다.',
    speaker: {
      name: '정지만',
      company: '숨고',
    },
  },
  {
    type: ProgramType.Sponsor,
    order: 3,
    title: '현대자동차 세션 공개 예정',
    description: '',
    speaker: {
      name: '현대자동차',
      company: '현대자동차',
    },
  },
  {
    type: ProgramType.A,
    order: 4,
    title: '이벤트 기반 웹뷰 프레임워크 설계와 플러그인 생태계 만들기',
    description:
      '웹뷰 프레임워크 Stackflow를 만들게 된 핵심 문제를 소개하고, Stackflow의 기초적인 이벤트 기반 설계로의 리팩토링과 그것을 활용한 플러그인 인터페이스를 소개합니다. 그리고 플러그인을 통한 확장 가능한 설계로 사내 개발 생태계를 구축한 사례 등 프레임워크를 만들며 얻은 핵심 설계 노하우들을 공개합니다. (https://github.com/daangn/stackflow)',
    speaker: {
      name: '원지혁',
      company: '당근',
    },
  },
  {
    type: ProgramType.B,
    order: 4,
    title: 'React Native, Metro를 넘어서',
    description:
      'React Native 개발을 하다 보면 Metro라고 하는 번들러를 반드시 사용하게 됩니다. Metro를 사용하다 보면 다양한 문제들을 자연스럽게 겪게 되는데요. 빌드 속도가 느리고, 전역 캐시를 사용하기 때문에 빌드하는 컴퓨터에 따라서 빌드 결과물이 달라지기도 하죠. 이 때문에 매번 `--reset-cache` 옵션을 붙이기도 합니다.<br/>' +
      '<br/>' +
      '토스팀에서는 이 문제를 React Native 번들러로 ESBuild로 교체함으로써 완벽하게 해결했습니다. 기술적으로 Metro와 ESBuild의 동작 원리에 대해서 살펴보면서, 어떻게 토스팀이 번들러를 교체하는 데에 성공했는지 공유합니다.',
    speaker: {
      name: '박서진',
      company: '토스',
    },
  },
  {
    type: ProgramType.Sponsor,
    order: 4,
    title: '엘리스 세션 공개 예정',
    description: '',
    speaker: {
      name: '엘리스',
      company: '엘리스',
    },
  },
  {
    type: ProgramType.A,
    order: 5,
    title: '대형 웹 애플리케이션 Micro Frontends 전환기',
    description:
      '200개 페이지가 넘는 복잡하고 큰 SaaS 웹 제품을 UI 컴포넌트 단위의 작은 앱으로 쪼개 독립적으로 개발, 배포할 수 있는 Micro Frontends 아키텍처로 전환한 여정을 공유합니다.<br/>' +
      '<br/>' +
      '레퍼런스가 부족하고 불확실성이 큰 기술 도입에 어떤 설득과 의사결정이 필요한지, 팀의 기능 개발 속도를 최대한 늦추지 않고 제품의 아키텍처를 바꾸려면 어떻게 해야 하는지와 같은 질문들에 대해 flex 팀이 찾아갔던 답을 확인해 보세요.',
    speaker: {
      name: '김종혁',
      company: 'flex',
    },
  },
  {
    type: ProgramType.B,
    order: 5,
    title: '크로스 플랫폼 디자인 시스템, 1.5년의 기록.',
    description:
      '당근마켓 디자인 시스템 팀이 걸어온 길을 소개합니다. 디자인 시스템의 설계와 구현 접근을 공유하며, 이 과정에서 겪은 실패와 그로부터 얻은 교훈을 함께 나눕니다.',
    speaker: {
      name: '하태영',
      company: '당근',
    },
  },
  {
    type: ProgramType.Sponsor,
    order: 5,
    title: '숨고 세션 공개 예정',
    description: '',
    speaker: {
      name: '숨고',
      company: '숨고',
    },
  },
];

export default programs;
