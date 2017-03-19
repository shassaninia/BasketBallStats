import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from './players/player-list/player-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
