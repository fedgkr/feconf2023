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

const sponsors: Sponsor[] = [
  {
    grade: SponsorGrade.Diamond,
    title: 'Toss',
    logo: {
      url: tossLogo,
      width: 82,
      height: 25,
    },
  },
  {
    grade: SponsorGrade.Diamond,
    title: 'Soomgo',
    logo: {
      url: soomgoLogo,
      width: 86,
      height: 29,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: '당근',
    logo: {
      url: carrotLogo,
      width: 53,
      height: 26,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: 'elice',
    logo: {
      url: eliceLogo,
      width: 101,
      height: 17,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: 'quotabook',
    logo: {
      url: quotabookLogo,
      width: 129,
      height: 16,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: 'fastcampus',
    logo: {
      url: fastcampusLogo,
      width: 135,
      height: 26,
    },
  },
  {
    grade: SponsorGrade.Platinum,
    title: 'hyundai',
    logo: {
      url: hyundaiLogo,
      width: 132,
      height: 17,
    },
  },
  {
    grade: SponsorGrade.Gold,
    title: 'NC',
    logo: {
      url: ncLogo,
      width: 37,
      height: 20,
    },
  },
  {
    grade: SponsorGrade.Rookie,
    title: 'twip',
    logo: {
      url: twipLogo,
      width: 64,
      height: 18,
    },
  },
];

export default sponsors;