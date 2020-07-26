import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { IBlackCard } from '../interfaces/ICardCollection';

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
    // this.whiteCards = this.whiteCards.concat(this.cardService.getWhiteCards);
  }

}
