import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'socket-io-example';

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.listen('test event').subscribe((data) => {
      console.log(data);
    })
  }
}
