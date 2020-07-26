import { Component, OnInit, OnChanges } from '@angular/core';
import { CardService } from '../services/card.service';
import { IBlackCard } from '../interfaces/ICardCollection';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.scss'],
})
export class LobbyPageComponent implements OnInit, OnChanges {
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
