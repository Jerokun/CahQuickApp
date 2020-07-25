export interface ICardCollection {
  blackCards: IBlackCard[];
  whiteCards: string[];
  Base: IDeck;
  CAHe1: IDeck;
  CAHe2: IDeck;
  CAHe3: IDeck;
  CAHe4: IDeck;
  CAHe5: IDeck;
  CAHe6: IDeck;
  greenbox: IDeck;
  The90s: IDeck;
  Box: IDeck;
  fantasy: IDeck;
  food: IDeck;
  science: IDeck;
  www: IDeck;
  hillary: IDeck;
  trumpvote: IDeck;
  trumpbag: IDeck;
  xmas2012: IDeck;
  xmas2013: IDeck;
  PAXE2013: IDeck;
  PAXP2013: IDeck;
  PAXE2014: IDeck;
  PAXEP2014: IDeck;
  PAXPP2014: IDeck;
  PAX2015: IDeck;
  HOCAH: IDeck;
  reject: IDeck;
  reject2: IDeck;
  Canadian: IDeck;
  misprint: IDeck;
  order: string[];
}

export interface IDeck {
  name: string;
  black: number[];
  white: number[];
  icon?: number | string;
}

export interface IBlackCard {
  text: string;
  pick: number;
}
