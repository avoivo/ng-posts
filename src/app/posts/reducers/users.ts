import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { User } from "../models";
import { UsersActions, UsersActionTypes, OrderByPostCount } from "../actions";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export enum OrderBy {
  Name,
  PostCount,
  CommentsPerPostCount
}

export interface State extends EntityState<User> {
  error: string;
  busy: boolean;
  orderBy: OrderBy;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id
});

export const initialState: State = adapter.getInitialState({
  error: null,
  busy: false,
  orderBy: OrderBy.Name
});

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.Load: {
      return { ...state, error: null, busy: true };
    }
    case UsersActionTypes.LoadSuccess: {
      return adapter.addMany(action.payload as User[], {
        ...adapter.removeAll(state),
        busy: false,
        error: null
      });
    }
    case UsersActionTypes.LoadFail: {
      return { ...state, error: action.payload, busy: false };
    }

    case UsersActionTypes.OrderByName:
      return {
        ...state,
        orderBy: OrderBy.Name
      };
    case UsersActionTypes.OrderByPostCount:
      return {
        ...state,
        orderBy: OrderBy.PostCount
      };

    case UsersActionTypes.OrderByCommentCount:
      return {
        ...state,
        orderBy: OrderBy.CommentsPerPostCount
      };
    default: {
      return state;
    }
  }
}

export const {
  // select the array of user ids
  selectIds: selectUserIds,

  // select the dictionary of user entities
  selectEntities: selectUserEntities,

  // select the array of users
  selectAll: selectAllUsers,

  // select the total user count
  selectTotal: selectUsersTotal
} = adapter.getSelectors();

export const getUsersError = (state: State) => state.error;
export const getUsersBusy = (state: State) => state.busy;

export const getOrderBy = (state: State) => state.orderBy;

export const sortedUsersSelector = (state: Observable<[User[], OrderBy]>) =>
  state.map(([users, orderBy]) =>
    users.sort((a, b) => {
      if (orderBy === OrderBy.Name) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
      } else if (orderBy === OrderBy.PostCount) {
        return a.postCount - b.postCount;
      } else if (orderBy === OrderBy.CommentsPerPostCount) {
        return a.commentsPerPostCount - b.commentsPerPostCount;
      }
      return 0;
    })
  );
