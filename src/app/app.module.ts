import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {PlayersModule} from './players/players.module';
import {TeamsModule} from './teams/teams.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { NotFoundComponent } from './not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component:PlayerListComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
     TeamsModule,
    PlayersModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
