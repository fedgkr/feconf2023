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
    company?: string;
  };
  attachments?: {
    fileUrl: string;
    videoUrl: string;
  };
  extraAction?: {
    link: string;
    label: string;
  };
}

export { ProgramType };
export type { Program };
