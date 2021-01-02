import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TgPortalComponent } from './tg-portal.component';

const routes: Routes = [{ path: '', component: TgPortalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TgPortalRoutingModule { }
