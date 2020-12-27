import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.scss']
})
export class JoinSessionComponent implements OnInit {

  constructor(public viewService: ViewService) { }

  ngOnInit(): void {
  }

}
