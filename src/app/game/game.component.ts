import { Component, OnInit, OnChanges } from '@angular/core';
import { CardService } from '../services/card.service';
import { IBlackCard } from './components/cards/black-card/IBlackCard';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnChanges {
  constructor(private cardService: CardService) {}

  blackCard: IBlackCard;
  whiteCards: string[] = [];

  ngOnChanges() {
    console.log('changes', this.whiteCards);
    return this.whiteCards;
  }

  ngOnInit() {
    this.blackCard = this.cardService.getBlackCard(0);
    this.whiteCards = this.cardService.getWhiteCards();
  }

  // TODO: https://material.angular.io/cdk/drag-drop/overview
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.whiteCards, event.previousIndex, event.currentIndex);
  }
}
