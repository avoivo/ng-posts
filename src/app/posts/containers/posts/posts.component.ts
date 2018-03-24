import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Post, User } from "../../models";

import * as fromReduces from "../../reducers";
import * as fromActions from "../../actions/posts";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  posts$: Observable<Post[]>;
  toggledComments$: Observable<number[]>;
  private routeParamSubscription: Subscription;

  constructor(private store: Store<fromReduces.State>, route: ActivatedRoute) {
    this.user$ = store.select(fromReduces.selectPostUser);
    this.posts$ = store.select(fromReduces.selectAllPosts);
    this.toggledComments$ = store.select(fromReduces.selectPostToggledComments);
    this.routeParamSubscription = route.params.subscribe(params => {
      this.store.dispatch(new fromActions.Load(params.id));
      this.store.dispatch(new fromActions.LoadUser(params.id));
    });
  }

  toggleCommentCollapse(postId: number) {
    this.store.dispatch(new fromActions.ToggleCommentCollapse(postId));
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.routeParamSubscription.unsubscribe();
  }
}
