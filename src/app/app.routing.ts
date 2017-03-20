import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from "./players/player-list/player-list.component";
import { NotFoundComponent } from './not-found.component'

const routes: Routes = [
    {
        path:'teams',
        loadChildren: 'app/teams/teams.module#TeamsModule'
    },
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
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}