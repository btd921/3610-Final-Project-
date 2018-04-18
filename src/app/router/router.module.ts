import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PlayerComponent } from '../player/player.component';
import { PositionsComponent } from '../positions/positions.component';
import { TeamComponent } from '../team/team.component';

const routes: Routes = [
  { path: 'player', component: PlayerComponent},
  { path: 'positions', component: PositionsComponent},
  { path: 'team', component: TeamComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }