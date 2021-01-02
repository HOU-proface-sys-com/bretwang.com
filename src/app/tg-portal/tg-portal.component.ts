import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tg-portal',
  templateUrl: './tg-portal.component.html',
  styleUrls: ['./tg-portal.component.scss']
})
export class TgPortalComponent implements OnInit {

  targetURL: SafeResourceUrl;

  public entity: Array<any>;
  safeMsg: SafeHtml;
  //   msg : string = `

  //   <tgb96b488458de4257bd60b778b759023e-root _nghost-fre-c5="" ng-version="10.1.6">
  //   </tgb96b488458de4257bd60b778b759023e-root>
  // <script src="https://kumamon.app/tgb96b488458de4257bd60b778b759023e/runtime.acf0dec4155e77772545.js" defer=""></script>
  // <script src="https://kumamon.app/tgb96b488458de4257bd60b778b759023e/polyfills.35a5ca1855eb057f016a.js" defer=""></script>
  // <script src="https://kumamon.app/tgb96b488458de4257bd60b778b759023e/main.a885e341643cb6f77479.js" defer=""></script>

  //   `;

  msg = `
<tgb96b488458de4257bd60b778b759023e-root>
</tgb96b488458de4257bd60b778b759023e-root>
<script src="assets/tgb96b488458de4257bd60b778b759023e/runtime.ccbf0065c5166af9d8366.js" defer=""></script>
<script src="assets/tgb96b488458de4257bd60b778b759023e/main.f242f78c0051540f3c211.js" defer=""></script>
`;

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {

    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
    this.targetURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://kumamon.app/tgb96b488458de4257bd60b778b759023e/index.html');
  }

  ngOnInit(): void {
    this.getData();
  }
  onClickMe() {
    console.log('feature/m12');
    console.log('feature/m1201');
    console.log('feature/m120102');
  }
  getData(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.get('https://api.kumamon.app/web2020-getAllItemsFunction-1DMQNJ45ANE8P', httpOptions).pipe(
      tap((data) => {
      }),
      catchError((err: any, caught: Observable<any>) => {
        console.log(err, caught)
        return of(err);
      })
    ).subscribe(data => {
      this.entity = data;
      console.log(this.entity);
    });
  }

}
