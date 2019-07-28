import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  findall():Observable<Books[]>{
    return this.http.get<Books[]>('http://localhost:3000/books')
  }

  push(obj):Observable<Books[]>{
    return this.http.post<Books[]>('http://localhost:3000/books',obj)
  }

  addReview(obj){
    
    
    return this.http.put('http://localhost:3000/books/'+obj.id,obj)
  }


}