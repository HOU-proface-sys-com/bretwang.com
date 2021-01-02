import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, ja_JP } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ja from '@angular/common/locales/ja';
import { TgChatComponent } from './tg-chat/tg-chat.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { TgPortalComponent } from './tg-portal/tg-portal.component';
registerLocaleData(ja);

import { TgRunScriptsDirective } from './directives/RunScriptsDirective.directive';
import { TgPlaygroundModule } from '@tg-playground/tg-playground/tg-playground.module';

@NgModule({
  declarations: [
    AppComponent,
    TgChatComponent,
    TgPortalComponent,
    TgRunScriptsDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    OverlayscrollbarsModule,
    TgPlaygroundModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ja_JP }],
  bootstrap: [AppComponent]
})
export class AppModule { }
