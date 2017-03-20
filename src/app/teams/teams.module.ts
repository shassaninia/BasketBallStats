import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamsRoutingModule } from "app/teams/teams.routing";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[TeamListComponent],
    imports:[BrowserModule,FormsModule, SharedModule,TeamsRoutingModule]
})
export class TeamsModule {}