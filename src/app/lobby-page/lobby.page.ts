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


