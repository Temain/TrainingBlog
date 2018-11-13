import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>('./assets/mocks/posts.json');
  }

  getPost(id: number): Observable<Post> {
    return this.getPosts().pipe(
      map(posts => posts.find(post => post.id === id))
    );
  }
}
