import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "../../models";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/let";

import * as fromReduces from "../../reducers";
import * as fromActions from "../../actions";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  orderBy$: Observable<fromReduces.OrderBy>;

  constructor(private store: Store<fromReduces.State>) {
    this.orderBy$ = store.select(fromReduces.selectOrderBy);

    this.users$ = Observable.combineLatest(
      store.select(fromReduces.selectAllUsers),
      this.orderBy$
    ).let(fromReduces.sortedUsersSelector);
  }

  ngOnInit() {
    this.store.dispatch(new fromActions.Load());
  }

  orderBy(orderBy: fromReduces.OrderBy) {
    switch (orderBy) {
      case fromReduces.OrderBy.Name:
        return this.store.dispatch(new fromActions.OrderByName());
      case fromReduces.OrderBy.PostCount:
        return this.store.dispatch(new fromActions.OrderByPostCount());
      case fromReduces.OrderBy.CommentsPerPostCount:
        return this.store.dispatch(new fromActions.OrderByCommentCount());
    }
  }
}
