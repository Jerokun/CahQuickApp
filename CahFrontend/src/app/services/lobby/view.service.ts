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

	public setState(key: string, value: boolean): void {
		console.log('before setState', this.viewStatesSubject.getValue());
		const newStates = this.getStates().map((k) => (k.key !== key ? k : { ...k, value }));
		this.viewStatesSubject.next(newStates);
		console.log('after setState', this.viewStatesSubject.getValue());
	}

	public getState(state: string): boolean {
		console.log('getState', _.findIndex(this.getStates, state).value);
		return _.findIndex(this.getStates, state).value;
	}

	public getStates(): Array<KeyValue<string, boolean>> {
		console.log('getStates', this.viewStatesSubject.getValue());
		return this.viewStatesSubject.getValue();
	}

	public toggleState(key: string): void {
		return this.setState(key, !this.getState(key));
	}
}
