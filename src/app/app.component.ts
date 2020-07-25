import { Component, OnInit } from '@angular/core';
import { IBlackCard, IDeck } from './interfaces/ICardCollection';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private cardService: CardService) {
  }

  blackCard: IBlackCard;

  ngOnInit() {
    this.blackCard = this.cardService.getBlackCard(0);
  }
}
