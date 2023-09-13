import { component$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { Main } from '~/routes/trailer/components/router-head/main';

import '~/styles/_main.scss';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <Main />
      </head>
      <body lang="ko">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
