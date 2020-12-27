import { Injectable } from '@angular/core';
import { start } from 'repl';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  start: boolean;

  game = false;
  rules = false;
  start = false;
  join = false;
  room = false;
  sure = false;
  private = true;
  menu = false;
  pmenu = false;

  constructor() { }

  toggle() {
    this.start = !start;
  }
}
