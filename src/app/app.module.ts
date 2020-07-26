import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlackCardComponent } from './cards/black-card/black-card.component';
import { WhiteCardComponent } from './cards/white-card/white-card.component';
import { CardService } from './services/card.service';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackCardComponent,
    WhiteCardComponent,
    LobbyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
