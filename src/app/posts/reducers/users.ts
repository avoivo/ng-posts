import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { User } from "../models";
import { UsersActions, UsersActionTypes } from "../actions/users";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export enum OrderBy {
  NameAsc,
  NameDesc,
  PostCountAsc,
  PostCountDesc,
  CommentsPerPostCountAsc,
  CommentsPerPostCountDesc
}

export interface State extends EntityState<User> {
  error: string;
  loading: boolean;
  loaded: boolean;
  orderBy: OrderBy;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id
});

export const initialState: State = adapter.getInitialState({
  error: null,
  loading: false,
  loaded: false,
  orderBy: OrderBy.NameAsc
});

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.Load: {
      return { ...state, error: null, loading: true };
    }
    case UsersActionTypes.LoadSuccess: {
      return adapter.addMany(action.payload as User[], {
        ...adapter.removeAll(state),
        loading: false,
        loaded: true,
        error: null
      });
    }
    case UsersActionTypes.LoadFail: {
      return { ...state, error: action.payload, loading: false };
    }

    case UsersActionTypes.OrderByNameAsc:
      return {
        ...state,
        orderBy: OrderBy.NameAsc
      };
    case UsersActionTypes.OrderByNameDesc:
      return {
        ...state,
        orderBy: OrderBy.NameDesc
      };
    case UsersActionTypes.OrderByPostCountAsc:
      return {
        ...state,
        orderBy: OrderBy.PostCountAsc
      };
    case UsersActionTypes.OrderByPostCountDesc:
      return {
        ...state,
        orderBy: OrderBy.PostCountDesc
      };
    case UsersActionTypes.OrderByCommentCountAsc:
      return {
        ...state,
        orderBy: OrderBy.CommentsPerPostCountAsc
      };
    case UsersActionTypes.OrderByCommentCountDesc:
      return {
        ...state,
        orderBy: OrderBy.CommentsPerPostCountDesc
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
export const getUsersLoading = (state: State) => state.loading;
export const getUsersLoaded = (state: State) => state.loaded;

export const getOrderBy = (state: State) => state.orderBy;

export const sortedUsersSelector = (state: Observable<[User[], OrderBy]>) =>
  state.map(([users, orderBy]) =>
    users.sort((a, b) => {
      if (orderBy === OrderBy.NameAsc) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
      } else if (orderBy === OrderBy.NameDesc) {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
      } else if (orderBy === OrderBy.PostCountAsc) {
        return a.posts.length - b.posts.length;
      } else if (orderBy === OrderBy.PostCountDesc) {
        return b.posts.length - a.posts.length;
      } else if (orderBy === OrderBy.CommentsPerPostCountAsc) {
        return a.commentsPerPostCount - b.commentsPerPostCount;
      } else if (orderBy === OrderBy.CommentsPerPostCountDesc) {
        return b.commentsPerPostCount - a.commentsPerPostCount;
      }
      return 0;
    })
  );
