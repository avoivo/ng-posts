import { Action } from "@ngrx/store";
import { User } from "../models";

export enum UsersActionTypes {
  Load = "[Users] Load",
  LoadSuccess = "[Users] Load Success",
  LoadFail = "[Users] Load Fail",
  OrderByName = "[Users] Order by Name",
  OrderByPostCount = "[Users] Order by Post count",
  OrderByCommentCount = "[Users] Order by Comment count"
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

export class OrderByName implements Action {
  readonly type: string = UsersActionTypes.OrderByName;
  constructor(public payload?: any) {}
}

export class OrderByPostCount implements Action {
  readonly type: string = UsersActionTypes.OrderByPostCount;
  constructor(public payload?: any) {}
}

export class OrderByCommentCount implements Action {
  readonly type: string = UsersActionTypes.OrderByCommentCount;
  constructor(public payload?: any) {}
}

export type UsersActions =
  | Load
  | LoadSuccess
  | LoadFail
  | OrderByName
  | OrderByPostCount
  | OrderByCommentCount;
