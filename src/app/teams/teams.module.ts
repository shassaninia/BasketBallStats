import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamsRoutingModule } from "app/teams/teams.routing";
import { CommonModule } from '../common/common.module';

@NgModule({
    declarations:[TeamListComponent],
    imports:[BrowserModule,FormsModule, CommonModule,TeamsRoutingModule]
})
export class TeamsModule {}