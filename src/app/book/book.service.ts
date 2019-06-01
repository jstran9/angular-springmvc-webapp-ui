import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class BookService {
  private API_BASE_URL = `http://localhost:8080/bookapi_war/api/`;
  private GET_ALL_BOOKS = `${this.API_BASE_URL}books`;
  private CREATE_BOOK = `${this.API_BASE_URL}book`;

  /*
   * dependency injection used here
   * let Angular's dependency injector inject the necessary dependency.
   */
  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.GET_ALL_BOOKS).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpResponse<any>) {
    return Observable.throw(error);
  }

  addBook(book: Book) {
    const body = JSON.stringify(book);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<Book>(this.CREATE_BOOK, body, httpOptions);
  }
}
