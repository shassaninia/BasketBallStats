import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from "./players/player-list/player-list.component";
import { NotFoundComponent } from './not-found.component'

const routes: Routes = [
    {
        path: '',
        component: PlayerListComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}