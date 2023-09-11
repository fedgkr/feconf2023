import { component$ } from '@builder.io/qwik';

import css from './TicketInfoSection.module.scss';
import { SectionDivider, SectionIntro } from '~/routes/components';
import { map } from 'lodash';

const ticketInfoList = [
  {
    title: '후원 티켓',
    items: [
      '티켓팅 : 10월 4일 오전 11시 오픈 예정',
      '가격 : 10만원 ',
      '특별 리워드 : 웹사이트, 엔딩 크레딧에 후원자 목록 노출',
    ],
  },
  {
    title: '일반 티켓',
    items: ['티켓팅 : 10월 5일 오전 11시 오픈 예정', '가격 : 4만원'],
  },
];

const TicketInfoSection = component$(() => {
  return (
    <section class={css.root}>
      <SectionDivider />
      <SectionIntro
        sectionName="TICKETS"
        title="올해는 후원 티켓을 준비했어요"
        description="올해는 누구나 FEConf 2023을 함께 만들어갈 수 있도록 후원 티켓을 준비했습니다. 후원 금액은 FEConf 2023을 준비하는 데 사용할 예정이며, 입장 티켓 외에도 특별 리워드로 웹사이트와 엔딩 크레딧에 후원자 목록이 노출될 예정입니다."
      />
      <ul class={css.list}>
        {map(ticketInfoList, ({ title, items }) => (
          <li class={css.info} key={title}>
            <div class={css.title}>
              <svg width="14" height="14" viewBox="0 0 14 14">
                <g>
                  <path
                    d="M12.8332 4.98134V3.49967C12.8332 2.85801 12.3082 2.33301 11.6665 2.33301H2.33317C1.6915 2.33301 1.17234 2.85217 1.17234 3.49967V4.98134C1.17234 5.38384 1.36484 5.78051 1.72067 5.96717C2.08817 6.17134 2.33317 6.55634 2.33317 6.99967C2.33317 7.44301 2.08234 7.83384 1.71484 8.02634C1.36484 8.21884 1.1665 8.61551 1.1665 9.01801V10.4997C1.1665 11.1413 1.6915 11.6663 2.33317 11.6663H11.6665C12.3082 11.6663 12.8332 11.1413 12.8332 10.4997V9.01801C12.8332 8.61551 12.6348 8.21884 12.2848 8.02634C11.9173 7.82801 11.6665 7.44301 11.6665 6.99967C11.6665 6.55634 11.9173 6.17134 12.2848 5.97301C12.6348 5.78051 12.8332 5.38384 12.8332 4.98134ZM7.58317 10.208H6.4165V9.04134H7.58317V10.208ZM7.58317 7.58301H6.4165V6.41634H7.58317V7.58301ZM7.58317 4.95801H6.4165V3.79134H7.58317V4.95801Z"
                    fill="white"
                  />
                </g>
              </svg>
              <h4>{title}</h4>
            </div>
            <ul class={css.description}>
              {map(items, (item) => (
                <li> · {item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default TicketInfoSection;
