import { Component, OnInit, Input } from '@angular/core';
import { IBlackCard } from '../../interfaces/ICardCollection';

@Component({
  selector: 'app-black-card',
  templateUrl: './black-card.component.html',
  styleUrls: ['./black-card.component.scss']
})
export class BlackCardComponent implements OnInit, IBlackCard {

  constructor() { }

  @Input()
  text: string;
  @Input()
  pick: number;

  ngOnInit(): void {
  }

}
