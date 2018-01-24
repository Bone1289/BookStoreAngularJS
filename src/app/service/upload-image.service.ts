import {Injectable} from '@angular/core';
import {reject} from "q";

@Injectable()
export class UploadImageService {

  filesToUpload: Array<File>;

  constructor() {
    this.filesToUpload = [];
  }

  upload(bookId: number) {
    this
      .makeFileRequest("http://localhost:8181/book/add/image?id=" + bookId, [], this.filesToUpload)
      .then(
        result => {
          console.log(result)
        },
        error => {
          console.log(error)
        });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }


  private makeFileRequest(url: string, params: Array<string>, filesToUpload: Array<File>) {
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();
      for (let i = 0; i < filesToUpload.length; i++) {
        formData.append("uploads[]", filesToUpload[i], filesToUpload[i].name)
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            console.log("image uploaded successfully!")
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
      xhr.send(formData)
    })
  }
}
