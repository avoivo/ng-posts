import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isHome$: Observable<boolean>;
  constructor(private router: Router) {
    this.isHome$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e: NavigationEnd) => e.url.endsWith("/"))
    );
  }
}
