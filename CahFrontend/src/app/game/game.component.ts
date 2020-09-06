import { Component, OnInit, OnChanges } from '@angular/core';
import { CardService } from '../services/card.service';
import { IBlackCard } from './components/cards/black-card/IBlackCard';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [CardService],
})
export class GameComponent implements OnInit, OnChanges {
  constructor(private cardService: CardService) {}

  public blackCard: IBlackCard;
  public whiteCards: string[] = [];
  

  ngOnChanges() {
    console.log('changes', this.whiteCards);
  }

  ngOnInit() {
    this.cardService.getDecks();
    this.blackCard = this.cardService.drawRandomBlackCard();
    this.whiteCards = this.cardService.newHand();
    console.log('this.blackCard:', this.blackCard);
    console.log('this.whiteCards:', this.whiteCards);
  }
}
