import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "../../models";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/let";

import * as fromReduces from "../../reducers";
import * as fromActions from "../../actions/users";

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

  sort(orderBy: fromReduces.OrderBy) {
    switch (orderBy) {
      case fromReduces.OrderBy.NameAsc:
        return this.store.dispatch(new fromActions.OrderByNameAsc());
      case fromReduces.OrderBy.NameDesc:
        return this.store.dispatch(new fromActions.OrderByNameDesc());
      case fromReduces.OrderBy.PostCountAsc:
        return this.store.dispatch(new fromActions.OrderByPostCountAsc());
      case fromReduces.OrderBy.PostCountDesc:
        return this.store.dispatch(new fromActions.OrderByPostCountDesc());
      case fromReduces.OrderBy.CommentsPerPostCountAsc:
        return this.store.dispatch(new fromActions.OrderByCommentCountAsc());
      case fromReduces.OrderBy.CommentsPerPostCountDesc:
        return this.store.dispatch(new fromActions.OrderByCommentCountDesc());
    }
  }
}
