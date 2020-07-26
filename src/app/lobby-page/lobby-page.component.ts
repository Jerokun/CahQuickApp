import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { IBlackCard } from '../interfaces/ICardCollection';
import * as _ from 'lodash';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.scss']
})
export class LobbyPageComponent implements OnInit {

  constructor(private cardService: CardService) { }

  blackCard: IBlackCard;
  whiteCards: string[] = [];
  ngOnInit() {
    this.blackCard = this.cardService.getBlackCard(0);
    let whiteCards: string[];
    whiteCards = _.assign(whiteCards, this.cardService.whiteCards);
    this.whiteCards = whiteCards;
  }

}
