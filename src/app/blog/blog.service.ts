import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blog} from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  ApiUrl = 'http://localhost:8080';
  blogs: Blog[];
  constructor(private httpClient: HttpClient) { }
  getAllBlog(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(this.ApiUrl + '/blogs/');
  }
  addBlog(blog: Blog): Observable<any> {
    return this.httpClient.post(`${this.ApiUrl}/blogs/`, blog);
  }
}
