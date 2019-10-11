import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../blog/blog';
import {Observable} from 'rxjs';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  ApiUrl = 'http://localhost:8080/';
  blogs: Blog[];
  constructor(private httpClient: HttpClient) { }
  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.ApiUrl + '/categorys/');
  }
  addCategory(category: Category): Observable<any> {
    return this.httpClient.post(`${this.ApiUrl}/categorys/`, category);
  }
}
