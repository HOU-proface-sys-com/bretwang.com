import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TgPlaygroundComponent } from '@tg-playground/tg-playground.component';
import { PlayArray01Component } from '@tg-playground/play-array01/play-array01.component';
import { PlayArray02Component } from '@tg-playground/play-array02/play-array02.component';
import { } from 'titan-office/';
import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    PlayArray01Component,
    PlayArray02Component,
    TgPlaygroundComponent
  ],
  exports: [
    PlayArray01Component,
    TgPlaygroundComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    // NzIconModule
  ]
})
export class TgPlaygroundModule { }
