import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersRoutingModule } from "app/players/players.routing";
import { CommonModule } from '../common/common.module';

@NgModule({
    declarations:[PlayerListComponent],
    imports:[BrowserModule,FormsModule, CommonModule,PlayersRoutingModule ]
})

export class PlayersModule {}