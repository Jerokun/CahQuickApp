import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { IDeck, IBlackCard } from '../interfaces/ICardCollection';

export interface WhiteCards {
  [id: number]: string[];
}
export interface BlackCards {
  [id: number]: IBlackCard;
}

@Injectable({
  providedIn: 'root'
})
export class DeckGeneratorService {

  constructor(private cardService: CardService) { }

  getDeck(){
    type Deck = Record<string, IDeck>;
  }

  shuffle() {

  }
}
