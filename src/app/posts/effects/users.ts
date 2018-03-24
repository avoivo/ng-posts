import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { of } from "rxjs/observable/of";

import * as fromActions from "../actions/users";
import { UserService } from "../services/user.service";

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UsersActionTypes.Load),
    mergeMap(action => {
      return this.userService.list().pipe(
        // If successful, dispatch success action with result
        map(data => new fromActions.LoadSuccess(data)),
        // If request fails, dispatch failed action
        catchError(err => of(new fromActions.LoadFail(err)))
      );
    })
  );
}
