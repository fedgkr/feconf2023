import { component$ } from '@builder.io/qwik';
import eq from 'lodash/eq';
import map from 'lodash/map';

import css from './TrackMenu.module.scss';

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

const menuList = [
  { key: 'all', label: 'All' },
  { key: 'a', label: 'Track A' },
  { key: 'b', label: 'Track B' },
  { key: 'partner', label: 'Partner' },
];

const TrackMenu = component$<Props>(({ selected }) => {
  return (
    <ul class={css.root}>
      {map(menuList, ({ key, label }) => (
        <li key={key}>
          <button class={[css.item, { [css.active]: eq(key, selected) }]}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
});

export default TrackMenu;
