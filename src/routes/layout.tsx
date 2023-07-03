import { component$, Slot } from '@builder.io/qwik';

import { Header } from '~/components';

import '../styles/_main.scss';

export default component$(() => {
  return (
    <>
      <Header />
      <main style={{ height: '100%' }}>
        <Slot />
      </main>
    </>
  );
});
