enum ProgramType {
  A,
  B,
  Sponsor,
}

interface Program {
  type: ProgramType;
  title: string;
  description: string;
  order: number;
  speaker: {
    name: string;
    company: string;
  };
}

export { ProgramType };
export type { Program };
