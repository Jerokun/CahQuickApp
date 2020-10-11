import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import 'hammerjs';

// Pages
import { LobbyPageComponent } from './lobby-page/lobby.page';
import { GameComponent } from './game/game.component';

// Game
import { BlackCardComponent } from './game/components/cards/black-card/black-card.component';
import { WhiteCardComponent } from './game/components/cards/white-card/white-card.component';
import { CardService } from './services/card.service';
import { CardDataService } from './services/card-data.service';
import { DeckGeneratorService } from './services/deck-generator.service';

// SignalR
import { SignalRService } from './services/signal-r.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HandComponent } from './game/hand/hand.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BlackCardComponent,
    LobbyPageComponent,
    WhiteCardComponent,
    GameComponent,
    HandComponent,
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DragDropModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  exports: [],
  providers: [CardService, DeckGeneratorService, CardDataService, SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
