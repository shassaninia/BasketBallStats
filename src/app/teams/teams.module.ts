import { NgModule } from '@angular/core'
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamsRoutingModule } from "app/teams/teams.routing";
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations:[TeamListComponent],
    imports:[CommonModule,FormsModule, SharedModule,TeamsRoutingModule]
})
export class TeamsModule {}