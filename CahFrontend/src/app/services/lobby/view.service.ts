import { Injectable } from '@angular/core';
import { start } from 'repl';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  start: boolean;

  constructor() { }

  toggle() {
    this.start = !start;
  }
}
