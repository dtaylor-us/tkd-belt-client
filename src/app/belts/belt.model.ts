export interface IBelt {
  id: number,
  name: string,
  rank: number,
  forms: string[],
  level: string,
  description: string,
  breaking: string[]
}

export enum Rank {
  Beginner,
  Intermediatex,
  Advanced,
  Black_Belt
}

