import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import { start } from 'repl';
import { BehaviorSubject } from 'rxjs';

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

  private viewStatesSubject = new BehaviorSubject<
    Array<KeyValue<string, boolean>>
  >(this.viewStates);

  public viewStatesObservable = this.viewStatesSubject.asObservable();

  public showMenu() {}

  constructor() {}

  setState(value: KeyValue<string, boolean>) {
    let viewStates = this.viewStates;

    console.log('before', viewStates);

    viewStates.map((state) => {
      if (state.value === value.value) {
        value.value;
      }
    });
    console.log('after', viewStates);
    this.viewStates = viewStates
    this.viewStatesSubject.next(viewStates);
  }

  public getState() {
    console.log('getvalue', this.viewStatesSubject.getValue());
    return this.viewStatesSubject.getValue();
  }
}
