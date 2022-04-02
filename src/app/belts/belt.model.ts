export interface IBelt {
  id: number,
  name: string,
  color: string,
  rank: number,
  forms: string[],
  kicks: string[],
  level: string,
  description?: string,
  breaking: string[],
  stripe?: string;
}

export enum Level {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  BLACK_BELT = 'Black_Belt'
}

export enum BeltColor {
  WHITE = "white",
  YELLOW = "yellow",
  ORANGE = "orange",
  GREEN = "green",
  PURPLE = "purple",
  BLUE = "blue",
  BROWN = "brown",
  RED = "red",
  BLACK = "black",
}

export const beltColorMap = new Map<string, string>([
  [BeltColor.WHITE, "#ffffff"],
  [BeltColor.YELLOW, "#f1f130"],
  [BeltColor.ORANGE, "#ffaa41"],
  [BeltColor.GREEN, "#37dc37"],
  [BeltColor.PURPLE, "#cc5dcc"],
  [BeltColor.BLUE, "#0277e3"],
  [BeltColor.BROWN, "#d99058"],
  [BeltColor.RED, "#f94545"],
  [BeltColor.BLACK, "#202020"],
  ["gold", "#D2B760"]
]);
