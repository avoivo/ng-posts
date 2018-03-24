import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { of } from "rxjs/observable/of";

import * as fromActions from "../actions/posts";
import { PostService } from "../services/post.service";
import { UserService } from "../services/user.service";

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private userService: UserService
  ) {}

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.PostsActionTypes.Load),
    mergeMap<fromActions.Load, fromActions.LoadSuccess>(action => {
      return this.postService.listForUser(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => new fromActions.LoadSuccess(data)),
        // If request fails, dispatch failed action
        catchError(err => of(new fromActions.LoadFail(err)))
      );
    })
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.PostsActionTypes.LoadUser),
    mergeMap<fromActions.LoadUser, fromActions.LoadUserSuccess>(action => {
      return this.userService.get(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => new fromActions.LoadUserSuccess(data)),
        // If request fails, dispatch failed action
        catchError(err => of(new fromActions.LoadUserFail(err)))
      );
    })
  );
}
