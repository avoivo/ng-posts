import { Action } from "@ngrx/store";
import { Post, User } from "../models";

export enum PostsActionTypes {
  Load = "[Posts] Load",
  LoadSuccess = "[Posts] Load Success",
  LoadFail = "[Posts] Load Fail",
  LoadUser = "[Posts] Load User",
  LoadUserSuccess = "[Posts] Load User Success",
  LoadUserFail = "[Posts] Load User Fail",
  ToggleCommentCollapse = "[Posts] Toggle Comment Colapse"
}

export class Load implements Action {
  readonly type: string = PostsActionTypes.Load;
  constructor(public payload: number) {}
}

export class LoadSuccess implements Action {
  readonly type: string = PostsActionTypes.LoadSuccess;
  constructor(public payload: Post[]) {}
}

export class LoadFail implements Action {
  readonly type: string = PostsActionTypes.LoadFail;
  constructor(public payload: any) {}
}

export class LoadUser implements Action {
  readonly type: string = PostsActionTypes.LoadUser;
  constructor(public payload: number) {}
}

export class LoadUserSuccess implements Action {
  readonly type: string = PostsActionTypes.LoadUserSuccess;
  constructor(public payload: User) {}
}

export class LoadUserFail implements Action {
  readonly type: string = PostsActionTypes.LoadUserFail;
  constructor(public payload: any) {}
}

export class ToggleCommentCollapse implements Action {
  readonly type: string = PostsActionTypes.ToggleCommentCollapse;
  constructor(public payload: number) {}
}

export type PostsActions =
  | Load
  | LoadSuccess
  | LoadFail
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
  | ToggleCommentCollapse;
