import { component$ } from '@builder.io/qwik';
import { EVENT_DATE_STR } from '~/constants';

const title = 'FECONF 2023';
const description = `국내 최대 프론트엔드 개발 컨퍼런스, FECONF 2023가 ${EVENT_DATE_STR} 오프라인으로 찾아옵니다.`;
const host = 'https://feconf2023-codemilli.vercel.app';
const ogImage = `${host}/images/preview/og.png`;

const gtagScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-RVV7YMBQEY');`;

export const RouterHead = component$(() => {
  return (
    <>
      {/* Global Meta */}
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul"
      />
      <link rel="icon" type="image/png" href={`${host}/images/favicon.png`} />

      {/* Open Graph Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${host}`} />
      <meta property="og:image:url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@FeConf" />

      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RVV7YMBQEY"
      />
      <script dangerouslySetInnerHTML={gtagScript} />
    </>
  );
});
