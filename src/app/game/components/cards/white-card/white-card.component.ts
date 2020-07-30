import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-white-card',
  templateUrl: './white-card.component.html',
  styleUrls: ['./white-card.component.scss'],
})
export class WhiteCardComponent implements OnInit {

  constructor() { }

  @Input() text: string;

  ngOnInit() {}

}
