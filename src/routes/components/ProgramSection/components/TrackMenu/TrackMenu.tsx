import { component$ } from '@builder.io/qwik';
import eq from 'lodash/eq';
import map from 'lodash/map';

import css from './TrackMenu.module.scss';
import { ProgramType } from '~/types';
import { useVisible } from '~/hooks';

interface Props {
  selected?: ProgramType;
  onSelect: (value?: ProgramType) => void;
}

const menuList = [
  { key: undefined, label: 'All' },
  { key: ProgramType.A, label: 'Track A' },
  { key: ProgramType.B, label: 'Track B' },
  { key: ProgramType.Sponsor, label: 'Sponsor' },
];

const TrackMenu = component$<Props>(({ selected, onSelect }) => {
  const { visible$ } = useVisible();
  return (
    <ul class={css.root}>
      {map(menuList, ({ key, label }, index) => (
        <li
          key={key}
          class={['fadeInRightSlide', { visible: visible$.value }]}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <button
            class={[css.item, { [css.active]: eq(key, selected) }]}
            onClick$={() => onSelect(key)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
});

export default TrackMenu;
