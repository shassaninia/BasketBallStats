import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersRoutingModule } from "app/players/players.routing";
import { SharedModule } from '../shared/shared.module';
import { PlayerProfileComponent } from './players-profile/player-profile.component';

@NgModule({
    declarations:[PlayerListComponent, PlayerProfileComponent],
    imports:[BrowserModule,FormsModule, SharedModule,PlayersRoutingModule ]
})

export class PlayersModule {}