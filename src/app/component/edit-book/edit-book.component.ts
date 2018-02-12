import {Component, OnInit} from '@angular/core';
import {UploadImageService} from "../../service/upload-image.service";
import {Book} from "../../model/book";
import {Params, ActivatedRoute, Router} from "@angular/router";
import {GetBookServiceService} from "../../service/get-book-service.service";
import {EditBookServiceService} from "../../service/edit-book-service.service";
import {UploadFileService} from "../upload/upload-file.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  private bookId: number;
  private book: Book = new Book();
  private bookUpdated: boolean;

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = {percentage: 0}

  constructor(private uploadImageService: UploadImageService,
              private uploadFileService: UploadFileService,
              private editBookService: EditBookServiceService,
              private getBookService: GetBookServiceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  onSubmit() {
    if (this.selectedFiles !== undefined) {
      this.progress.percentage = 0;

      this.currentFileUpload = this.selectedFiles.item(0)
      this.uploadFileService.pushFileToStorage(this.currentFileUpload, this.bookId.toString()).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      });

      this.selectedFiles = undefined;

    }

    this.editBookService.sendBook(this.book).subscribe(
      res => {
        // this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        this.bookUpdated = true;
      },
      error => {
        console.log(error);
      })
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    })

    this.getBookService.getBook(this.bookId).subscribe(res => {
        this.book = res;
      },
      error => {
      })
  }

  selectFile(event) {
    const file = event.target.files.item(0)

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadFileService.pushFileToStorage(this.currentFileUpload, this.bookId.toString()).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.bookUpdated = true;
        this.onSubmit()
      }
    });

    this.selectedFiles = undefined
  }

}
