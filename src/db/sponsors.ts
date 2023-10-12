import type { Sponsor } from '~/types';
import { SponsorGrade } from '~/types';

import tossLogo from '~/assets/sponsors/toss.png';
import soomgoLogo from '~/assets/sponsors/soomgo.png';
import carrotLogo from '~/assets/sponsors/carrot.png';
import eliceLogo from '~/assets/sponsors/elice.png';
import quotabookLogo from '~/assets/sponsors/quotabook.png';
import fastcampusLogo from '~/assets/sponsors/fastcampus.png';
import hyundaiLogo from '~/assets/sponsors/hyundai.png';
import ncLogo from '~/assets/sponsors/nc.png';
import twipLogo from '~/assets/sponsors/twip.png';
import greetingLogo from '~/assets/sponsors/greeting.png';

// 토스: https://toss.im/career/jobs
// 당근: https://about.daangn.com/
// 쿼타: https://career.quotalab.com/
// 현차: https://talent.hyundai.com/main/main.hc
// 숨고: https://career.soomgo.com/
// 앨리스: https://elice.careers/
// 이제이엔: https://www.ejn.team/
// 패캠: https://fastcampus.co.kr/instructor_apply
// nc: https://careers.ncsoft.com
// greeting: https://www.greetinghr.com

const sponsors: Sponsor[] = [
  {
    grade: SponsorGrade.Diamond,
    title: 'Toss',
    link: 'https://toss.im/career/jobs',
    logo: {
      url: tossLogo,
      width: 82,
      height: 25,
    },
  },
  {
    grade: SponsorGrade.Diamond,
    title: 'Soomgo',
    // link: 'https://career.soomgo.com/',
    link: 'https://forms.gle/a6JDTByC1XqjQVfm6',
    logo: {
      url: soomgoLogo,
      width: 86,
      height: 29,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: '당근',
    link: 'https://about.daangn.com/',
    logo: {
      url: carrotLogo,
      width: 53,
      height: 26,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: 'elice',
    link: 'https://elice.careers/',
    logo: {
      url: eliceLogo,
      width: 101,
      height: 17,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: 'quotabook',
    link: 'https://career.quotalab.com/',
    logo: {
      url: quotabookLogo,
      width: 129,
      height: 16,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: 'fastcampus',
    link: 'https://fastcampus.co.kr/instructor_apply',
    logo: {
      url: fastcampusLogo,
      width: 135,
      height: 26,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: 'hyundai',
    link: 'https://talent.hyundai.com/main/main.hc',
    logo: {
      url: hyundaiLogo,
      width: 132,
      height: 17,
    },
  },
  {
    grade: SponsorGrade.Gold,
    title: 'NC',
    link: 'https://careers.ncsoft.com',
    logo: {
      url: ncLogo,
      width: 37,
      height: 20,
    },
  },
  {
    grade: SponsorGrade.Rookie,
    title: 'twip',
    link: 'https://www.ejn.team/',
    logo: {
      url: twipLogo,
      width: 64,
      height: 18,
    },
  },
  {
    grade: SponsorGrade.Rookie,
    title: 'greeting',
    link: 'https://www.greetinghr.com',
    logo: {
      url: greetingLogo,
      width: 117,
      height: 24,
    },
  },
];

export default sponsors;
