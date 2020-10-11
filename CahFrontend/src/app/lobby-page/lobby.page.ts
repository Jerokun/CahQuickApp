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
  rules = false;
  start = false;
  join = false;
  room = false;
  sure = false;
  private = true;
  menu = false;
  pmenu = false;
  isButtonGroupClasses: true;

  public players = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addPlayer(newPlayer: string) {
    if (newPlayer) {
      this.players.push(newPlayer);
    }
  }

  public roomcode = Math.random().toString(36).substr(2, 4);
  // addroomcode(newroomcode: string) {
  //   if (newroomcode) {
  //     this.roomcode.push(newroomcode);
  //   }
  // }

  ngOnInit() {}

  toggleGame() {
    if (this.game === false) {
      this.game = true;
    } else {
      this.game = false;
    }
  }
}

// import { Component, OnInit, OnChanges } from '@angular/core';
// import * as _ from 'lodash';

// @Component({
//   selector: 'app-lobby-page',
//   templateUrl: './lobby-page.component.html',
//   styleUrls: ['./lobby-page.component.scss'],
// })

// export class LobbyPageComponent implements OnInit, OnChanges {
//   constructor() {}

//   game = false;
//   isButtonGroupClasses: true;
//   public roomCode: string[] = [];

//   ngOnChanges() {
//     console.log('changes', this.roomCode);
//   }

//   ngOnInit() {
//     function makeid(length) {
//       var result           = '';
//       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//       var charactersLength = characters.length;
//       for ( var i = 0; i < length; i++ ) {
//          result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//       return result;
//     }
//     this.roomCode = this.result();
//     console.log('this.roomCode', this.roomCode);

//   }

//   toggleGame() {
//     if (this.game === false) {
//       this.game = true;
//     } else {
//       this.game = false;
//     }
//   }
// }
