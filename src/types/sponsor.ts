enum SponsorGrade {
  Diamond,
  Platinum,
  Gold,
  Rookie,
}

interface Sponsor {
  grade: SponsorGrade;
  title: string;
  link: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  url?: string;
}

export { SponsorGrade };
export type { Sponsor };
