export interface IBelt {
  id: number,
  name: string,
  color: string,
  rank: number,
  forms: string[],
  kicks: string[],
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

