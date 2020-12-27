import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss']
})
export class NewSessionComponent implements OnInit {

  constructor(private viewService: ViewService) { }

  ngOnInit(): void {
  }

}
