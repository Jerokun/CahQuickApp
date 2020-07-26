import { Injectable } from '@angular/core';
import {
  ICardCollection,
} from '../game/components/cards/ICardCollection';
import { IDeck } from "../game/components/cards/IDeck";
import { IBlackCard } from "../game/components/cards/black-card/IBlackCard";
import * as jsonData from '../services/data.json';
import * as _ from 'lodash';

export enum CardTypes {
  blackCard = 'blackCard',
  whiteCard = 'whiteCard',
}

@Injectable({
  providedIn: 'root',
})
export class CardService implements ICardCollection {
  constructor() {
    this.getCardCollection();
  }

  cardCollection: ICardCollection;
  decks: IDeck[];

  // Raw json elements ----------------
  blackCards: IBlackCard[] = jsonData.blackCards;
  whiteCards: string[] = jsonData.whiteCards;
  Base: IDeck = jsonData.Base;
  CAHe1: IDeck = jsonData.CAHe1;
  CAHe2: IDeck = jsonData.CAHe2;
  CAHe3: IDeck = jsonData.CAHe3;
  CAHe4: IDeck = jsonData.CAHe4;
  CAHe5: IDeck = jsonData.CAHe5;
  CAHe6: IDeck = jsonData.CAHe6;
  greenbox: IDeck = jsonData.greenbox;
  The90s: IDeck = jsonData.The90s;
  Box: IDeck = jsonData.Box;
  fantasy: IDeck = jsonData.fantasy;
  food: IDeck = jsonData.food;
  science: IDeck = jsonData.science;
  www: IDeck = jsonData.www;
  hillary: IDeck = jsonData.hillary;
  trumpvote: IDeck = jsonData.trumpvote;
  trumpbag: IDeck = jsonData.trumpbag;
  xmas2012: IDeck = jsonData.xmas2012;
  xmas2013: IDeck = jsonData.xmas2013;
  PAXE2013: IDeck = jsonData.PAXE2013;
  PAXP2013: IDeck = jsonData.PAXP2013;
  PAXE2014: IDeck = jsonData.PAXE2014;
  PAXEP2014: IDeck = jsonData.PAXEP2014;
  PAXPP2014: IDeck = jsonData.PAXPP2014;
  PAX2015: IDeck = jsonData.PAX2015;
  HOCAH: IDeck = jsonData.HOCAH;
  reject: IDeck = jsonData.reject;
  reject2: IDeck = jsonData.reject2;
  Canadian: IDeck = jsonData.Canadian;
  misprint: IDeck = jsonData.misprint;
  order: string[] = jsonData.order;
  // ----------------------------------

  public getCardCollection(): ICardCollection {
    return (this.cardCollection = jsonData);
  }

  public getDeck(name: string) {
    console.log('name', name);
    console.log('cardCollection', this.order);
    if (_.find(this.order, name)) {
      console.log('name', name);
      console.log('cardCollection', this.order);
      const blackCards = this.getBlackCards();
      const whiteCards = this.getWhiteCards();
    }
  }

  public getRandomCard(array: [], cardType: string) {}

  getBlackCard(blackCardId: number): IBlackCard {
    console.log('blackCardId', blackCardId);
    console.log(this.blackCards[blackCardId]);
    return this.blackCards[blackCardId];
  }

  getBlackCards() {
    return this.cardCollection.blackCards;
  }

  getWhiteCards(): string[] {
    const whiteCards = this.whiteCards;
    let hand: string[] = [];
    for (let card = 0; card < 5; card++) {
      console.log('add ' + whiteCards[card]);
      hand = hand.concat(whiteCards[card]);
    }
    return hand;
  }
}
