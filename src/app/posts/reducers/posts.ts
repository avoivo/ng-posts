import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Post, User } from "../models";
import {
  PostsActions,
  PostsActionTypes,
  ToggleCommentCollapse
} from "../actions/posts";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export interface State extends EntityState<Post> {
  error: string;
  loading: boolean;
  loaded: boolean;
  user: User;
  toggledComments: number[];
}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: (post: Post) => post.id
});

export const initialState: State = adapter.getInitialState({
  error: null,
  loading: false,
  loaded: false,
  user: null,
  toggledComments: []
});

export function reducer(state = initialState, action: PostsActions): State {
  switch (action.type) {
    case PostsActionTypes.Load:
    case PostsActionTypes.LoadUser: {
      return { ...state, error: null, loading: true };
    }
    case PostsActionTypes.LoadSuccess: {
      return adapter.addMany(action.payload as Post[], {
        ...adapter.removeAll(state),
        loading: false,
        loaded: true,
        error: null
      });
    }
    case PostsActionTypes.LoadUserSuccess: {
      return { ...state, user: action.payload };
    }
    case PostsActionTypes.LoadFail:
    case PostsActionTypes.LoadUserFail: {
      return { ...state, error: action.payload, loading: false };
    }

    case PostsActionTypes.ToggleCommentCollapse: {
      if (state.toggledComments.indexOf(action.payload) === -1) {
        return {
          ...state,
          toggledComments: [action.payload, ...state.toggledComments]
        };
      } else {
        return {
          ...state,
          toggledComments: state.toggledComments.filter(
            id => id !== action.payload
          )
        };
      }
    }

    default: {
      return state;
    }
  }
}

export const {
  // select the array of post ids
  selectIds: selectPostIds,

  // select the dictionary of post entities
  selectEntities: selectPostEntities,

  // select the array of posts
  selectAll: selectAllPosts,

  // select the total post count
  selectTotal: selectPostsTotal
} = adapter.getSelectors();

export const getPostsError = (state: State) => state.error;
export const getPostsLoading = (state: State) => state.loading;
export const getPostsLoaded = (state: State) => state.loaded;
export const getUser = (state: State) => state.user;
export const getToggledComments = (state: State) => state.toggledComments;
