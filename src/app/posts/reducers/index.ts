import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromUsers from "./users";
import * as fromPosts from "./posts";

export { OrderBy, sortedUsersSelector } from "./users";

export interface State {
  users: fromUsers.State;
  posts: fromPosts.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUsers.reducer,
  posts: fromPosts.reducer
};

export const getPostsState = createFeatureSelector<State>("Posts");

export const getUsersEntitiesState = createSelector(
  getPostsState,
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

export const selectUsersError = createSelector(
  getUsersEntitiesState,
  fromUsers.getUsersError
);

export const selectUsersLoading = createSelector(
  getUsersEntitiesState,
  fromUsers.getUsersLoading
);

export const selectUsersLoaded = createSelector(
  getUsersEntitiesState,
  fromUsers.getUsersLoaded
);

export const selectOrderBy = createSelector(
  getUsersEntitiesState,
  fromUsers.getOrderBy
);

export const getPostsEntitiesState = createSelector(
  getPostsState,
  state => state.posts
);

export const selectPostIds = createSelector(
  getPostsEntitiesState,
  fromPosts.selectPostIds
);
export const selectPostEntities = createSelector(
  getPostsEntitiesState,
  fromPosts.selectPostEntities
);
export const selectAllPosts = createSelector(
  getPostsEntitiesState,
  fromPosts.selectAllPosts
);
export const selectPostsTotal = createSelector(
  getPostsEntitiesState,
  fromPosts.selectPostsTotal
);

export const selectPostsError = createSelector(
  getPostsEntitiesState,
  fromPosts.getPostsError
);

export const selectPostsLoading = createSelector(
  getPostsEntitiesState,
  fromPosts.getPostsLoading
);

export const selectPostsLoaded = createSelector(
  getPostsEntitiesState,
  fromPosts.getPostsLoaded
);

export const selectPostUser = createSelector(
  getPostsEntitiesState,
  fromPosts.getUser
);

export const selectPostToggledComments = createSelector(
  getPostsEntitiesState,
  fromPosts.getToggledComments
);
