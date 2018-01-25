import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {GetBookListService} from "../../service/get-book-list.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private selectedBook: Book;
  private checked: boolean;
  private bookList: Book[];
  private allChecked: boolean;
  private removeBookList: Book[] = new Array();

  constructor(private logginService: LoginService,
              private getBookListService: GetBookListService,
              private router: Router) {
  }

  ngOnInit() {
    this.getBookListService.getBookList().subscribe(
      res => {
        console.log(res.json());
        this.bookList = res.json();
      },
      error => {
        console.log(error.json());
      });
  }

  updateSelected(checker) {

  }

  updateRemoveBookList(checker, book: Book) {

  }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  removeSelectedBooks() {

  }

  openDialog(book: Book) {

  }
}
