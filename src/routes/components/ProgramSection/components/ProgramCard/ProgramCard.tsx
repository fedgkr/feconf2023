import { component$ } from '@builder.io/qwik';

import css from './ProgramCard.module.scss';
import type { Program } from '~/types';
import { ProgramType } from '~/types';

interface Props {
  program: Program;
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

const ProgramCard = component$<Props>(
  ({ program: { title, description, speaker, type, order } }) => {
    const orderLabel = orderLookup[order];
    const trackLabel = trackLookup[type];
    return (
      <div class={css.root}>
        <div class={css.lineWrap}>
          <div class={css.line} />
        </div>
        <div class={css.content}>
          <span class={css.time}>
            {orderLabel} / {trackLabel}
          </span>
          <h2 class={css.title}>{title}</h2>
          <span class={css.speaker}>
            {speaker.name} · {speaker.company}
          </span>
          <p class={css.description} dangerouslySetInnerHTML={description} />
        </div>
      </div>
    );
  }
);

export default ProgramCard;
