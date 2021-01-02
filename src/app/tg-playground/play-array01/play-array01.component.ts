import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'div[tgPlay01]',
  exportAs: 'tgPlay01',
  templateUrl: './play-array01.component.html',
  styleUrls: ['./play-array01.component.scss'],
  host: {
    '[class.tg-btn-primary]': `nzType === 'primary'`,
    '[class.tg-btn-dashed]': `nzType === 'dashed'`,
    '[class.tg-btn-link]': `nzType === 'link'`,
    '[class.tg-btn-text]': `nzType === 'text'`,
    '[class.tg-btn-danger]': `nzType === 'danger'`
  }
})
export class PlayArray01Component implements OnInit {

  @Input() nzType: string = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
