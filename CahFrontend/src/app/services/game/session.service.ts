import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewService } from '../lobby/view.service';
import { url } from 'inspector';

export interface Lobby {
	id: string;
  players: Player[];
}

export interface Player {
	id: string;
	name: string;
}



@Injectable({
	providedIn: 'root',
})
export class SessionService {
	private _userName: string;
	private _roomCode: string;
	public roomcode = Math.random().toString(36).substr(2, 4);
	public placeholder: string = 'Your name';
  public players = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public scores = ['7', '5', '3', '2'];

	constructor(private http: HttpClient, private viewService: ViewService) {}

	addPlayer(newPlayer: string) {
		if (newPlayer.length > 0) {
			this.userName = newPlayer;
		} else {
			this.userName = null;
		}

		this.viewService.setState('start', false);
		this.viewService.setState('room', false);
		this.viewService.toggleState('game');
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
					this.getNewRoom(this.viewService.getState('private'), this.userName);
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
				console.error('No valid button has been found, but an error has occured');
				break;
		}
  }

/* To copy Text from Textbox */
copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}

  controllerUrl = 'api/SessionController';

  getDecklist(): Observable<any> {
		return this.http.get<any>(this.controllerUrl + '/getDecklist');
	}

	getNewRoom(priv: boolean, name: string): Observable<any> {
		const params = new HttpParams().set('userName', name).set('isPrivate', priv.toString());

		return this.http.get<any>(this.controllerUrl + '/getNewSession', { params });
	}

	getJoinSession(name: string, roomCode: string): Observable<any> {
		const params = new HttpParams().set('userName', name).set('roomCode', roomCode);

		return this.http.get<any>(this.controllerUrl + '/getNewSession', { params });
	}

	public get roomCode(): string {
		return this._roomCode;
	}
	public set roomCode(v: string) {
		this._roomCode = v;
	}

	public get userName(): string {
		return this._userName;
	}
	public set userName(v: string) {
		this._userName = v;
	}
}
