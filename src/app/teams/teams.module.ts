import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamsRoutingModule } from "app/teams/teams.routing";

@NgModule({
    declarations:[TeamListComponent],
    imports:[BrowserModule,FormsModule, TeamsRoutingModule]
})
export class TeamsModule {}