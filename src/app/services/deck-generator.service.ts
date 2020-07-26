import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { IDeck, IBlackCard } from '../interfaces/ICardCollection';

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
