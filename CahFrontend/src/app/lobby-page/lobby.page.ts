import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { SessionService } from '../services/game/session.service';
import { ViewService } from '../services/lobby/view.service';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.scss'],
})
export class LobbyPageComponent implements OnInit {
  constructor(private sessionService: SessionService, private viewService: ViewService) {}

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
  public placeholder: string = 'Your name';

  private userName: string = null;
  public players = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  public roomcode = Math.random().toString(36).substr(2, 4);

  ngOnInit() {
  }

  createRoom() {
    switch (this.userName) {
      case null:
        this.buttonError('createRoom');
        break;
      case undefined:
        this.buttonError('createRoom');
        break;

      default:
        if (this.userName.length > 0) {
          this.sessionService.getNewSession(this.private, this.userName);
          this.room = !this.room;
        } else {
          this.buttonError('createRoom');
        }
        break;
    }
  }

  buttonError(button: string) {
    switch (button) {
      case 'createRoom':
        this.placeholder = 'Fill in name!';
        console.error('Please enter a name');
        break;

      case 'startGame':
        // ...
        break;

      default:
        console.error(
          'No valid button has been found, but an error has occured'
        );
        break;
    }
  }

  addPlayer(newPlayer: string) {
    if (newPlayer.length > 0) {
      this.userName = newPlayer;
    } else {
      this.userName = null;
    }
  }

  toggleGame() {
    if (this.game === false) {
      this.game = true;
    } else {
      this.game = false;
    }
  }
}
