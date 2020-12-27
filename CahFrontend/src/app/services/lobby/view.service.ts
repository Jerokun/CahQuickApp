import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import { start } from 'repl';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root',
})
export class ViewService {
	private viewStates: Array<KeyValue<string, boolean>> = [
		{ key: 'start', value: false },
		{ key: 'game', value: false },
		{ key: 'rules', value: false },
		{ key: 'start', value: false },
		{ key: 'join', value: false },
		{ key: 'room', value: false },
		{ key: 'sure', value: false },
		{ key: 'private', value: true },
		{ key: 'menu', value: false },
		{ key: 'pmenu', value: false },
	];

	private viewStatesSubject = new BehaviorSubject<Array<KeyValue<string, boolean>>>(this.viewStates);

	public viewStatesObservable = this.viewStatesSubject.asObservable();

	public showMenu() {}

	constructor() {}

	setState(key: string, value: boolean) {
		const newStates = this.getStates().map((k) => (k.key !== key ? k : { ...k, age: value }));
		return this.viewStatesSubject.next(newStates);
	}

	public getStates() {
		console.log('getvalue', this.viewStatesSubject.getValue());
		return this.viewStatesSubject.getValue();
	}

	public toggleState(key: string) {
		return this.setState('private', !this.getState('private'));
	}

	public getState(state: string): boolean {
		return _.findIndex(this.getStates, state).value;
	}
}
