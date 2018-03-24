import { Action } from "@ngrx/store";
import { User } from "../models";

export enum UsersActionTypes {
  Load = "[Users] Load",
  LoadSuccess = "[Users] Load Success",
  LoadFail = "[Users] Load Fail",
  OrderByNameAsc = "[Users] Order by Name Ascending",
  OrderByNameDesc = "[Users] Order by Name Descending",
  OrderByPostCountAsc = "[Users] Order by Post count Ascending",
  OrderByPostCountDesc = "[Users] Order by Post count Descending",
  OrderByCommentCountAsc = "[Users] Order by Comment count Ascending",
  OrderByCommentCountDesc = "[Users] Order by Comment count Descending"
}

export class Load implements Action {
  readonly type: string = UsersActionTypes.Load;
  constructor(public payload?: any) {}
}

export class LoadSuccess implements Action {
  readonly type: string = UsersActionTypes.LoadSuccess;
  constructor(public payload: User[]) {}
}

export class LoadFail implements Action {
  readonly type: string = UsersActionTypes.LoadFail;
  constructor(public payload: any) {}
}

export class OrderByNameAsc implements Action {
  readonly type: string = UsersActionTypes.OrderByNameAsc;
  constructor(public payload?: any) {}
}

export class OrderByNameDesc implements Action {
  readonly type: string = UsersActionTypes.OrderByNameDesc;
  constructor(public payload?: any) {}
}

export class OrderByPostCountAsc implements Action {
  readonly type: string = UsersActionTypes.OrderByPostCountAsc;
  constructor(public payload?: any) {}
}

export class OrderByPostCountDesc implements Action {
  readonly type: string = UsersActionTypes.OrderByPostCountDesc;
  constructor(public payload?: any) {}
}

export class OrderByCommentCountAsc implements Action {
  readonly type: string = UsersActionTypes.OrderByCommentCountAsc;
  constructor(public payload?: any) {}
}

export class OrderByCommentCountDesc implements Action {
  readonly type: string = UsersActionTypes.OrderByCommentCountDesc;
  constructor(public payload?: any) {}
}

export type UsersActions =
  | Load
  | LoadSuccess
  | LoadFail
  | OrderByNameAsc
  | OrderByNameDesc
  | OrderByPostCountAsc
  | OrderByPostCountDesc
  | OrderByCommentCountAsc
  | OrderByCommentCountDesc;
