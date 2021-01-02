import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';

@Component({
  selector: 'tg-playground',
  templateUrl: './tg-playground.component.html',
  styleUrls: ['./tg-playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TgPlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
