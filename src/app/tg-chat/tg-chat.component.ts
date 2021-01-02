import { Component, OnInit, ChangeDetectionStrategy,ViewChild } from '@angular/core';

@Component({
  selector: 'app-tg-chat',
  templateUrl: './tg-chat.component.html',
  styleUrls: ['./tg-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TgChatComponent implements OnInit {

  osComponentOptions1 = {
    className: 'os-theme-light',
    resize: 'none',
    paddingAbsolute: true,
    scrollbars: {
        autoHide: 'never'
    }
};

osComponentOptions2 = {
  resize: 'none',
  paddingAbsolute: true,
  scrollbars: {
      autoHide: 'never'
  }
};

  constructor() { }

  ngOnInit(): void {
  }

}
