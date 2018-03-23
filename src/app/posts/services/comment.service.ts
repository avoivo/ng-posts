import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Comment } from "../models";

const commentsEndpoint = "https://jsonplaceholder.typicode.com/comments";

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Comment> {
    return this.httpClient.get<Comment>(commentsEndpoint);
  }

  listForPost(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      "${commentsEndpoint}?postId=${postId}"
    );
  }
}
