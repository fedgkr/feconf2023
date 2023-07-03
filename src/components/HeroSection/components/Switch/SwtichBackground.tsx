import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { SceneItem } from 'scenejs';
import { isServer } from '@builder.io/qwik/build';
import css from './SwitchBackground.module.scss';

interface Props {
    on: boolean;
}

const SwitchBackground = component$<Props>(({ on }) => {
    const gradientSignal = useSignal<HTMLElement>();

    useVisibleTask$(({ cleanup, track }) => {
        track(() => on);
        if (!isServer && !on) {
            const scene = new SceneItem({
                0: {
                    attribute: {
                        gradientTransform: `rotate(0)`,
                    },
                },
                2: {
                    attribute: {
                        gradientTransform: `rotate(360)`,
                    },
                }
            }, {
                selector: "#myGradient",
                iterationCount: "infinite",
            });

            // scene.on("animate", e => {
            //     // rotation.value = e.frame.get("rotation");
            // });
            scene.play();

            cleanup(() => {
                scene.finish();
            });
        }
    });

    return (<svg viewBox="0 0 800 400" class={css.switchBackground}>
        <mask id="front-mask">
            <rect class="mask" x="100" y="50" width="600" height="300" rx="150" stroke="white" stroke-width="10" />
        </mask>
        <mask id="back-mask">
            <rect class="mask" x="80" y="40" width="640" height="320" rx="160" stroke="white" stroke-width="20" />
        </mask>
        <g filter="url(#blur)">
            <ellipse class="back-ellipse" cx="400" cy="200" rx="400" fill="url(#myGradient)" mask="url(#back-mask)" />
        </g>
        <ellipse class="front-ellipse" cx="400" cy="200" rx="400" mask="url(#front-mask)" fill="url(#myGradient)" />

        <defs>
            <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
            </filter>
            <linearGradient id="myGradient" ref={gradientSignal}>
                <stop stop-color="#712FFF" />
                <stop offset="0.4" cx="50%" stop-color="#712FFF" stop-opacity="0.2" />
                <stop offset="0.6" cx="50%" stop-color="#712FFF" stop-opacity="0.2" />
                <stop offset="1" stop-color="#712FFF" />
            </linearGradient>
        </defs>
    </svg>);
});

export default SwitchBackground;
