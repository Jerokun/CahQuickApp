import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-lobby-menu',
  templateUrl: './lobby-menu.component.html',
  styleUrls: ['./lobby-menu.component.scss']
})
export class LobbyMenuComponent implements OnInit {

  @Input() start: boolean;
  @Output() startChange = new EventEmitter();

  constructor(private viewService: ViewService) { }

  ngOnInit(): void {
  }

  onStartButtonClicked() {
    this.viewService.start = true;
  }
  onRulesButtonClicked() {}

}
