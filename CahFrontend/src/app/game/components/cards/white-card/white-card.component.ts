import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-white-card',
  templateUrl: './white-card.component.html',
  styleUrls: ['./white-card.component.scss', '../../../game.component.scss'],
})
export class WhiteCardComponent implements OnInit {
  constructor() {}

  confirmed = false;
  selected = false;

  @Input() text: string;

  ngOnInit() {}

  confirm(): void {
    throw Error('Not yet implemented');
  }
}
