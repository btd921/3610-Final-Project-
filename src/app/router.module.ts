import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PositionsComponent } from './positions/positions.component';
import { PlayersComponent } from './players/players.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  { path: 'positions', component: PositionsComponent },
  { path: 'players', component: PlayersComponent},
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
