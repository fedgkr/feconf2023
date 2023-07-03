/* eslint-disable qwik/valid-lexical-scope */
import { $, component$, noSerialize, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import css from './Switch.module.scss';
import SwitchBackground from './SwtichBackground';
import { isServer } from '@builder.io/qwik/build';
import Gesto from 'gesto';
import { EASE_IN_OUT, Scene } from 'scenejs';

interface Props {
  on: boolean;
  scroll: boolean;
  onChangeOn: () => void;
}

const Switch = component$<Props>(({ on, scroll, onChangeOn }) => {
  const initSignal = useSignal(false);
  const knobSignal = useSignal<HTMLElement>();
  const sceneSignal = useSignal<Scene>();

  const switchOn = $(() => {
    sceneSignal.value!.play();
    sceneSignal.value!.once("ended", () => {
      onChangeOn();
    });
  });
  useVisibleTask$(({ cleanup }) => {
    if (!isServer) {
      const timerId = setTimeout(() => {
        requestAnimationFrame(() => {
          initSignal.value = true;
        });
      }, 500);
      const scene = new Scene({
        [`.${css.guide}`]: {
          0: {
            "transform": "translate(-50%, -50%) translateX(40px)",
            "opacity": 1,
          },
          0.1: {
            "opacity": 0,
          },
          0.2: {
            "transform": "translate(-50%, -50%) translateX(-40px)",
          },
        },
        [`.${css.knob}`]: {
          0: {
            transform: "translate(0cqw)",
          },
          0.2: {
            transform: "translate(100cqw)",
          },
        },
      }, {
        selector: true,
        easing: EASE_IN_OUT,
        fillMode: "both",
      });
      const el = knobSignal.value!;

      console.log(el);
      const gesto = new Gesto(el, {
        container: window,
        preventClickEventOnDrag: true,
      });

      gesto.on("dragStart", e => {
        scene.setDirection("normal");

        e.data.startPer = scene.getTime() * 100;
        e.data.cqw = el.parentElement!.offsetWidth;
      });
      gesto.on("drag", e => {
        const per = e.data.startPer + e.distX / e.data.cqw * 100;

        scene.setTime(`${per}%`);
      });
      gesto.on("dragEnd", e => {
        const per = e.data.startPer + e.distX / e.data.cqw * 100;

        if (per <= 0) {
          return;
        }
        if (per >= 100) {
          onChangeOn()
        } else if (per > 50 || e.isClick) {
          scene.play();
          scene.once("ended", () => {
            onChangeOn();
          });
        } else if (per < 50) {
          scene.setDirection("reverse");
          scene.setTime(`${100 - per}%`);
          scene.play();

          scene.once("ended", () => {
            scene.setDirection("normal");
            scene.setTime(0);
          });
        }
      });


      sceneSignal.value = noSerialize(scene);
      cleanup(() => {
        clearTimeout(timerId);
        scene.finish();
        gesto.unset();
        sceneSignal.value = undefined;
      });
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => on);
    track(() => scroll);
    const scene = sceneSignal.value;

    if (!isServer && !on && scroll && scene?.getDirection() === "normal") {
      if (!scene.isEnded() || scene.getTime() !== scene.getDuration()) {
        switchOn();
      }
    }
  });

  return (
    <div class={[css.root, { [css.on]: on, [css.init]: initSignal.value }]}>
      <SwitchBackground on={on} />
      <div class={css.scrollArea} onClick$={switchOn}>
        <div class={css.offsetArea}>
          <div ref={knobSignal} class={css.knob} />
        </div>
        <svg class={css.guide} width="50" height="32" viewBox="0 0 50 32" fill="none">
          <path class={css.guidePath1} d="M17.3333 22.6667L24 16L17.3333 9.33333" stroke="#595874" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path class={css.guidePath2} d="M8 22.6667L14.6667 16L8 9.33333" stroke="#595874" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  );
});

export default Switch;
