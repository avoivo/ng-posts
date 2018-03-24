import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

import { Post } from "../models";

const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

@Injectable()
export class PostService {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${POSTS_ENDPOINT}?_embed=comments`);
  }

  listForUser(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `${POSTS_ENDPOINT}?userId=${userId}&_embed=comments`
    );
  }
}
