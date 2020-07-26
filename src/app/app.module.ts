import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlackCardComponent } from './cards/black-card/black-card.component';
import { WhiteCardComponent } from './cards/white-card/white-card.component';
import { CardService } from './services/card.service';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BlackCardComponent,
    LobbyPageComponent,
    WhiteCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DragDropModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
