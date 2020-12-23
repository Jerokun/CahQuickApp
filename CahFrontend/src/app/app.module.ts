import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyPageComponent } from './lobby-page/lobby.page';
import { BlackCardComponent } from './game/components/cards/black-card/black-card.component';
import { WhiteCardComponent } from './game/components/cards/white-card/white-card.component';
import { GameComponent } from './game/game.component';
import { HandComponent } from './game/hand/hand.component';
import { CardService } from './services/card.service';
import { CardDataService } from './services/card-data.service';
import { ChatboxComponent } from './chat/chatbox/chatbox.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SessionService } from './services/session.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlackCardComponent,
    LobbyPageComponent,
    WhiteCardComponent,
    GameComponent,
    HandComponent,
    ChatboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [CardService, CardDataService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
