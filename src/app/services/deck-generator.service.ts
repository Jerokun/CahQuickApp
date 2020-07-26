import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { IDeck } from '../game/components/cards/IDeck';
import { IBlackCard } from '../game/components/cards/black-card/IBlackCard';

export interface WhiteCards {
  [id: number]: string[];
}
export interface BlackCards {
  [id: number]: IBlackCard;
}

export type Deck = Record<string, IDeck>;

@Injectable({
  providedIn: 'root'
})
export class DeckGeneratorService {

  constructor(private cardService: CardService) { }

  buildDeck() {
  }

  getDeck() {
  }

  shuffle() {
  }
}
