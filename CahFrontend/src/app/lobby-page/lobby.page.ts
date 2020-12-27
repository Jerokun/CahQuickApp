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
	public placeholder = 'Your name';

	public currentView: Array<KeyValue<string, boolean>>;

	constructor(private sessionService: SessionService, public viewService: ViewService) {}

	private userName: string = null;
	public players = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

	ngOnInit(): void {
		this.viewService.viewStatesObservable.subscribe((e) => (this.currentView = e));
	}

	addPlayer(newPlayer: string): void {
		if (newPlayer.length > 0) {
			this.userName = newPlayer;
		} else {
			this.userName = null;
		}

		this.viewService.setState('start', false);
		this.viewService.setState('room', false);
		this.viewService.toggleState('game');
	}
}
