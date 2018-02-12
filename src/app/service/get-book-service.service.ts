import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Book} from "../model/book";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Response} from "@angular/http/src/static_response";

@Injectable()
export class GetBookServiceService {

  booksSoFar = new Map<number, Book>();
  private booksSoFarObservable = new BehaviorSubject<Book>(new Book());

  getBook(id: number): Observable<any> {

    if (!this.booksSoFar.has(id)) {
      let url = "http://localhost:8181/book/" + id;
      let headers = new Headers({
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('xAuthToken')
      })
      return this.http.get(url, {headers: headers})
        .map(res => res.json())
        .do(data => {
          this.booksSoFar.set(id, data);
        });
    } else {
      this.booksSoFarObservable.next(this.booksSoFar.get(id))
      return this.booksSoFarObservable.asObservable();
    }
  }

  constructor(private http: Http) {
  }

  // getBook(id: number) {
  //   let url = "http://localhost:8181/book/" + id;
  //   let headers = new Headers({
  //     'Content-Type': 'application/json',
  //     'x-auth-token': localStorage.getItem('xAuthToken')
  //   })
  //
  //   return this.http.get(url, {headers: headers});
  // }

}
