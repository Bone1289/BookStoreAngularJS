import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Book} from "../model/book";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class GetBookServiceService {

  booksSoFar = new Map<number, Book>();
  private booksSoFarObservable = new BehaviorSubject<Book>(new Book());

  // getBook(id: number) {
  //
  //   if (!this.booksSoFar.has(id)) {
  //     let url = "http://localhost:8181/book/" + id;
  //     let headers = new Headers({
  //       'Content-Type': 'application/json',
  //       'x-auth-token': localStorage.getItem('xAuthToken')
  //     })
  //
  //     return this.http.get(url, {headers: headers});
  //   } else {
  //     return this.booksSoFarObservable.asObservable()
  //   }
  //
  //   // return this.booksSoFarObservable.asObservable()
  //   //   .filter(
  //   //     res => {
  //   //       if (res.id === id) {
  //   //         return res;
  //   //       }
  //   //     }
  //   //   );
  // }

  constructor(private http: Http) {
  }

  getBook(id: number) {
    let url = "http://localhost:8181/book/" + id;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })

    return this.http.get(url, {headers: headers});
  }

}
