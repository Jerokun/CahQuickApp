import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.scss'],
})
export class LobbyPageComponent implements OnInit {
  constructor() {}

  game = false;
  isButtonGroupClasses: true;

  ngOnInit() {}

  toggleGame() {
    if (this.game === false) {
      this.game = true;
    } else {
      this.game = false;
    }
  }
}
