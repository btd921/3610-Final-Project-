import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PlayerComponent } from '../player/player.component';
import { PositionsComponent } from '../positions/positions.component';

const routes: Routes = [
  { path: 'player', component: PlayerComponent},
  { path: 'positions', component: PositionsComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }