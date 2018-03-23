import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromUsers from "./users";

export { OrderBy, sortedUsersSelector } from "./users";

export interface State {
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUsers.reducer
};

export const getUsersState = createFeatureSelector<State>("Users");

export const getUsersEntitiesState = createSelector(
  getUsersState,
  state => state.users
);

export const selectUserIds = createSelector(
  getUsersEntitiesState,
  fromUsers.selectUserIds
);
export const selectUserEntities = createSelector(
  getUsersEntitiesState,
  fromUsers.selectUserEntities
);
export const selectAllUsers = createSelector(
  getUsersEntitiesState,
  fromUsers.selectAllUsers
);
export const selectUsersTotal = createSelector(
  getUsersEntitiesState,
  fromUsers.selectUsersTotal
);

export const selectUserError = createSelector(
  getUsersEntitiesState,
  fromUsers.getUsersError
);

export const selectUsersBusy = createSelector(
  getUsersEntitiesState,
  fromUsers.getUsersBusy
);

export const selectOrderBy = createSelector(
  getUsersEntitiesState,
  fromUsers.getOrderBy
);
