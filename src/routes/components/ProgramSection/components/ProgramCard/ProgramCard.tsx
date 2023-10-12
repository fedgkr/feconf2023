import { component$ } from '@builder.io/qwik';

import css from './ProgramCard.module.scss';
import type { Program } from '~/types';
import { ProgramType } from '~/types';
import { useVisible } from '~/hooks';
import { SafeLink } from '~/components';

interface Props {
  program: Program;
  index: number;
}

const orderLookup: Record<number, string> = {
  1: '13:00 - 13:40',
  2: '13:50 - 14:30',
  3: '14:40 - 15:20',
  4: '15:30 - 16:10',
  5: '16:20 - 17:00',
};
const trackLookup: Record<ProgramType, string> = {
  [ProgramType.A]: 'Track A',
  [ProgramType.B]: 'Track B',
  [ProgramType.Sponsor]: 'Sponsor Session',
};

const ProgramCard = component$<Props>(({ program }) => {
  const { visible$ } = useVisible();
  if (!program) {
    return null;
  }
  const orderLabel = orderLookup[program.order];
  const trackLabel = trackLookup[program.type];
  const delay = 100;
  return (
    <div
      class={[css.root, 'fadeInRightSlide', { visible: visible$.value }]}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div class={css.lineWrap}>
        <Icon />
        <div class={css.line} />
      </div>
      <div class={css.content}>
        <span class={css.time}>
          {orderLabel} / {trackLabel}
        </span>
        <h2 class={css.title}>{program.title}</h2>
        <span class={css.speaker}>
          {program.speaker.name}
          {program.speaker.company?.length && (
            <span> · {program.speaker.company}</span>
          )}
        </span>
        {program.description && (
          <p
            class={css.description}
            dangerouslySetInnerHTML={program.description}
          />
        )}
        {program.extraAction && (
          <SafeLink class={css.extraLink} href={program.extraAction.link}>
            {program.extraAction.label}
          </SafeLink>
        )}
      </div>
    </div>
  );
});

const Icon = component$(() => (
  <div class={css.icon}>
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M8.05546 1.66551C8.15463 1.49051 8.05546 1.25717 7.85129 1.23384C6.32296 1.01801 4.75963 1.39717 3.51129 2.31884C3.40046 2.40634 3.36546 2.56967 3.44129 2.69801L5.19713 5.74301C5.30796 5.93551 5.58796 5.93551 5.70463 5.74301L8.05546 1.66551ZM12.4246 4.85634C11.853 3.41551 10.7213 2.25467 9.30379 1.64801C9.16963 1.58967 9.01213 1.64801 8.93629 1.77634L7.18046 4.81551C7.06963 5.00217 7.20963 5.24717 7.43713 5.24717H12.1505C12.3546 5.24717 12.5005 5.04301 12.4246 4.85634ZM12.4655 5.83051H8.84879C8.62713 5.83051 8.48129 6.07551 8.59796 6.26801L11.083 10.5788C11.1821 10.7538 11.433 10.783 11.5613 10.6255C12.5763 9.35384 13.008 7.69134 12.7571 6.08134C12.7396 5.93551 12.6113 5.83051 12.4655 5.83051ZM2.43796 3.37467C1.42879 4.65217 0.991295 6.30301 1.24213 7.91884C1.25963 8.05884 1.38796 8.16384 1.53379 8.16384H5.15046C5.37213 8.16384 5.51796 7.91884 5.40129 7.72634L2.91629 3.42134C2.81129 3.24634 2.56046 3.21717 2.43796 3.37467ZM1.57463 9.13801C2.14629 10.5788 3.27796 11.7397 4.69546 12.3463C4.82963 12.4047 4.98713 12.3463 5.06296 12.218L6.81879 9.17884C6.92963 8.98634 6.78963 8.74134 6.56796 8.74134H1.84879C1.64463 8.74717 1.49879 8.95134 1.57463 9.13801ZM6.14213 12.7663C7.67046 12.9822 9.23379 12.603 10.4821 11.6813C10.5988 11.5938 10.6338 11.4247 10.558 11.2963L8.80213 8.25134C8.69129 8.05884 8.41129 8.05884 8.29463 8.25134L5.93796 12.3288C5.83879 12.5038 5.94379 12.7372 6.14213 12.7663Z"
          fill="#FAFAFA"
        />
      </g>
    </svg>
  </div>
));

export default ProgramCard;
