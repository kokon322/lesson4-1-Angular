import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../modules/post';
import {User} from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getUserByPostId(id): Observable<User>{
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  }
}
