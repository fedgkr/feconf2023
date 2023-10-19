import { component$ } from '@builder.io/qwik';
import { useVisible } from '~/hooks';
import css from './Info.module.scss';
import map from 'lodash/map';

const TimerIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83412 2.04167H8.16746C8.48829 2.04167 8.75079 1.77917 8.75079 1.45833C8.75079 1.1375 8.48829 0.875 8.16746 0.875H5.83412C5.51329 0.875 5.25079 1.1375 5.25079 1.45833C5.25079 1.77917 5.51329 2.04167 5.83412 2.04167Z"
      fill="white"
    />
    <path
      d="M11.1016 4.6025L11.5391 4.165C11.7608 3.94333 11.7666 3.57583 11.5391 3.34833L11.5333 3.3425C11.3058 3.115 10.9441 3.12083 10.7166 3.3425L10.2791 3.78C9.37496 3.05667 8.23746 2.625 7.00079 2.625C4.20079 2.625 1.82079 4.935 1.75079 7.735C1.67496 10.6983 4.04912 13.125 7.00079 13.125C9.90579 13.125 12.2508 10.7742 12.2508 7.875C12.2508 6.63833 11.8191 5.50083 11.1016 4.6025ZM7.58412 7.875C7.58412 8.19583 7.32162 8.45833 7.00079 8.45833C6.67996 8.45833 6.41746 8.19583 6.41746 7.875V5.54167C6.41746 5.22083 6.67996 4.95833 7.00079 4.95833C7.32162 4.95833 7.58412 5.22083 7.58412 5.54167V7.875Z"
      fill="white"
    />
  </svg>
);

const VideoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.91667 6.125V4.08333C9.91667 3.7625 9.65417 3.5 9.33333 3.5H2.33333C2.0125 3.5 1.75 3.7625 1.75 4.08333V9.91667C1.75 10.2375 2.0125 10.5 2.33333 10.5H9.33333C9.65417 10.5 9.91667 10.2375 9.91667 9.91667V7.875L11.2525 9.21083C11.62 9.57833 12.25 9.31583 12.25 8.79667V5.1975C12.25 4.67833 11.62 4.41583 11.2525 4.78333L9.91667 6.125Z"
      fill="white"
    />
  </svg>
);

const infoList = [
  {
    title: '입장 가능 시간',
    content:
      '컨퍼런스가 진행되는 롯데타워 31층 입장은 세션 시작 1시간 전인 12시부터 가능합니다. 후원사에서 준비한 부스에 방문해보세요.',
    icon: TimerIcon,
  },
  {
    title: '라이브 스트리밍',
    content:
      '티켓을 구매하지 못했다고 너무 슬퍼하지 마세요. FEConf 2023의 발표 세션은 유투브에서 라이브 스트리밍으로 동시에 송출되며, 종료 후 FEConf 유투브 채널에서도 업로드 예정입니다.',
    icon: VideoIcon,
  },
];

const Info = component$(() => {
  const { visible } = useVisible();
  return (
    <ul class={css.list}>
      {map(infoList, ({ title, content, icon: Icon }, key) => (
        <li key={key}>
          <div
            class={[css.info, 'fadeInRightSlide', { visible }]}
            style={{ transitionDelay: `${(key + 1) * 100}ms` }}
          >
            <div class={css.iconWrap}>
              <Icon />
            </div>
            <div class={css.title}>{title}</div>
          </div>
          <p
            class={[css.content, 'fadeInRightSlide', { visible }]}
            style={{ transitionDelay: `${(key + 1) * 100 + 100}ms` }}
          >
            {content}
          </p>
        </li>
      ))}
    </ul>
  );
});

export default Info;
