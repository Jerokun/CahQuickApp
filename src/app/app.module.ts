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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    BlackCardComponent,
    LobbyPageComponent,
    WhiteCardComponent,
    GameComponent,
  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DragDropModule,
    MaterialModule,
  ],
  exports: [],
  providers: [CardService, DeckGeneratorService, CardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
