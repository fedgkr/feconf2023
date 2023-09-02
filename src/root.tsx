import { component$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from '~/routes/trailer/components/router-head/router-head';

import '~/styles/_main.scss';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <RouterHead />
      </head>
      <body lang="ko">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
