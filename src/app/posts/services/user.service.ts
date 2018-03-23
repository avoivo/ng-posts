import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, Post } from "../models";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { CommentService } from "./comment.service";
import { PostService } from "./post.service";
import "rxjs/add/observable/forkJoin";

const usersEndpoint = "https://jsonplaceholder.typicode.com/users";

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private commentService: CommentService,
    private postService: PostService
  ) {}
  W;
  list(): Observable<User[]> {
    return Observable.forkJoin([
      this.httpClient.get<User[]>(usersEndpoint),
      this.postService.list(),
      this.commentService.list()
    ]).pipe(
      map(resolvedObservables => {
        const users = resolvedObservables[0],
          posts = resolvedObservables[1],
          comments = resolvedObservables[2];
        return users.map(user => {
          const postCount = posts.filter(post => post.userId === user.id)
            .length;
          return Object.assign({}, user, {
            postCount: postCount,
            commentsPerPostCount: comments.length / postCount
          });
        });
      })
    );
  }
}
