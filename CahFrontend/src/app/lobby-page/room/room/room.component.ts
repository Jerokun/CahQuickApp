import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor(public viewService: ViewService) { }

  ngOnInit(): void {
  }

}
