import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MetaGuard } from '@ngx-meta/core';
// import { IndexComponent } from './index/index.component';
// import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',  loadChildren: () => import('@tg-portal/tg-portal-routing.module').then(m => m.TgPortalRoutingModule) },
  { path: 'chat',  loadChildren: () => import('@tg-chat/tg-chat-routing.module').then(m => m.TgChatRoutingModule) },
  { path: 'playground',  loadChildren: () => import('@tg-playground/tg-playground-routing.module').then(m => m.TgPlaygroundRoutingModule) }
];
// const routes: Routes = [
   // { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '', component: IndexComponent, canActivate: [MetaGuard],
  //   data: {
  //     meta: {
  //       title: 'Japan Topic！ - 匿名掲示板',
  //       keywords: 'トピック, ハッシュタグ, 匿名, 掲示板, 2ちゃんねる, 5ちゃんねる, 2ch, 5ch'
  //     }
  //   }
  // },
  // { path: 'thread/:id', component: ContentComponent }
// ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
