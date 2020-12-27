import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
  selector: 'app-quit-menu',
  templateUrl: './quit-menu.component.html',
  styleUrls: ['./quit-menu.component.scss']
})
export class QuitMenuComponent implements OnInit {

  constructor(public viewService: ViewService) { }

  ngOnInit(): void {
  }

}
