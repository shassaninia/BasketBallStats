import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersRoutingModule } from "app/players/players.routing";

@NgModule({
    declarations:[PlayerListComponent],
    imports:[BrowserModule,FormsModule, PlayersRoutingModule]
})

export class PlayersModule {}