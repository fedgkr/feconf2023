import { component$ } from '@builder.io/qwik';

import css from './SponsorList.module.scss';
import { map } from 'lodash';

interface Props {
  grade: string;
  list: { key: string; imageUrl: string }[];
}

const SponsorList = component$<Props>(({ grade, list }) => {
  return (
    <div class={css.root}>
      <header class={css.header}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <g>
            <path
              d="M11.6665 11.0833V2.91667C11.6665 2.275 11.1415 1.75 10.4998 1.75H3.49984C2.85817 1.75 2.33317 2.275 2.33317 2.91667V11.0833H1.74984C1.429 11.0833 1.1665 11.3458 1.1665 11.6667C1.1665 11.9875 1.429 12.25 1.74984 12.25H12.2498C12.5707 12.25 12.8332 11.9875 12.8332 11.6667C12.8332 11.3458 12.5707 11.0833 12.2498 11.0833H11.6665ZM4.77734 7C5.96734 6.2125 6.819 4.70167 6.97067 2.91667H7.02317C7.17484 4.70167 8.0265 6.2125 9.2165 7C8.0265 7.7875 7.17484 9.29833 7.02317 11.0833H6.97067C6.819 9.29833 5.96734 7.7875 4.77734 7Z"
              fill="white"
            />
          </g>
        </svg>
        <h2>{grade}</h2>
      </header>
      <ul class={css.list}>
        {map(list, (item) => (
          <li key={item.key}>
            <img src={item.imageUrl} alt={item.key} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SponsorList;
