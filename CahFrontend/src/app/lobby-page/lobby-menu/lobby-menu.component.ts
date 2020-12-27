import { KeyValue } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
	selector: 'app-lobby-menu',
	templateUrl: './lobby-menu.component.html',
	styleUrls: ['./lobby-menu.component.scss'],
})
export class LobbyMenuComponent implements OnInit {
	constructor(public viewService: ViewService) {}

	ngOnInit(): void {}

	onRulesButtonClicked(): void {}
}
