import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { SceneItem } from 'scenejs';
import { isServer } from '@builder.io/qwik/build';
import css from './SwitchBackground.module.scss';

interface Props {
    on: boolean;
}

const SwitchBackground = component$<Props>(({ on }) => {
    useVisibleTask$(({ cleanup, track }) => {
        track(() => on);
        if (!isServer && !on) {
            const scene = new SceneItem({
                0: {
                    transform: "rotate(0deg)",
                },
                2: {
                    transform: "rotate(360deg)",
                }
            }, {
                selector: `.${css.blurWrapper}`,
                iterationCount: "infinite",
            });

            // scene.on("animate", e => {
            //     // rotation.value = e.frame.get("rotation");
            // });
            scene.playCSS();

            cleanup(() => {
                scene.endCSS();
            });
        }
    });

    return (<>
        <svg viewBox="0 0 800 800" class={css.switchBackground}>
            <mask id="back-mask">
                <rect class="mask" x="0" y="160" width="800" height="480" rx="240" stroke="white" stroke-width="160" />
            </mask>
            <mask id="front-mask">
                <rect class="mask" x="80" y="240" width="640" height="320" rx="160" stroke="white" stroke-width="10" />
            </mask>
            {/* <g mask="url(#back-mask)">
                <g class={css.blurWrapper}>
                    <image class={css.blurImage} href="/images/preview/blur.png" x="0" y="0" width="800" height="800" />
                </g>
            </g> */}
            <g mask="url(#front-mask)">
                <g class={css.blurWrapper}>
                    <ellipse class="front-ellipse" cx="400" cy="400" rx="400" ry="400" fill="url(#myGradient2)" />
                </g>
            </g>
            <defs>
                <linearGradient id="myGradient2">
                    <stop stop-color="#712FFF" />
                    <stop offset="0.4" cx="50%" stop-color="#712FFF" stop-opacity="0.2" />
                    <stop offset="0.6" cx="50%" stop-color="#712FFF" stop-opacity="0.2" />
                    <stop offset="1" stop-color="#712FFF" />
                </linearGradient>
            </defs>
        </svg>
    </>);
});

export default SwitchBackground;
