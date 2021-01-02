import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TgPlaygroundComponent } from './tg-playground.component';
import { PlayArray01Component } from './play-array01/play-array01.component';

const routes: Routes = [
  { path: '', component: TgPlaygroundComponent },
  { path: 'array01', component: PlayArray01Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TgPlaygroundRoutingModule { }
