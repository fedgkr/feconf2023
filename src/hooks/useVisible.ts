import { useSignal, useVisibleTask$ } from '@builder.io/qwik';

const useVisible = () => {
  const visible = useSignal(false);
  useVisibleTask$(() => {
    visible.value = true;
  });
  return { visible: visible.value, visible$: visible };
};

export default useVisible;
