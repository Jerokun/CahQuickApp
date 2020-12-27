import { KeyValue } from '@angular/common';
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
  
  isButtonGroupClasses: true;
  public placeholder: string = 'Your name'

  public currentView: Array<KeyValue<string, boolean>>;
  
  constructor(private sessionService: SessionService, public viewService: ViewService) {}

  private userName: string = null;
  public players = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  public roomcode = Math.random().toString(36).substr(2, 4);

  ngOnInit() {
    this.viewService.viewStatesObservable.subscribe(e => this.currentView = e);
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
          this.sessionService.getNewSession(this.viewService.getState('private'), this.userName);
          this.viewService.setState('room', true);
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
}
