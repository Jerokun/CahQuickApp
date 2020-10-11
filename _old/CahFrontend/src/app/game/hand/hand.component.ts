import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit, OnChanges {

  @Input() cards: string[];

  constructor() { }

  hand = true;
  

  ngOnInit(): void {
    console.log('handCards', this.cards);
  }

  ngOnChanges() {}

}
