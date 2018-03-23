import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Post } from "../models";

const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

@Injectable()
export class PostService {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Post> {
    return this.httpClient.get<Post>(postsEndpoint);
  }

  listForUser(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>("${postsEndpoint}?userId=${userId}");
  }
}
