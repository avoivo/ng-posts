import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, Post } from "../models";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { CommentService } from "./comment.service";
import "rxjs/add/observable/forkJoin";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private commentService: CommentService
  ) {}

  list(): Observable<User[]> {
    return Observable.forkJoin([
      this.httpClient.get<User[]>(`${USERS_ENDPOINT}?_embed=posts`),
      this.commentService.list()
    ]).pipe(
      map(resolvedObservables => {
        const users = resolvedObservables[0],
          comments = resolvedObservables[1];
        return users.map(user =>
          Object.assign({}, user, {
            commentsPerPostCount: comments.length / user.posts.length
          })
        );
      })
    );
  }

  get(id: number): Observable<User> {
    return this.httpClient.get<User>(`${USERS_ENDPOINT}/${id}`);
  }
}
