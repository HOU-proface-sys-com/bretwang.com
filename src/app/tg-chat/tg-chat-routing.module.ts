import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TgChatComponent } from './tg-chat.component';

const routes: Routes = [{ path: '', component: TgChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TgChatRoutingModule { }
