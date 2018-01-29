import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {
  }

  pushFileToStorage(file: File, id: string): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('id', id + '');

    const req = new HttpRequest('POST', 'http://localhost:8181/upload/post', formdata, {
      headers: new HttpHeaders().append('x-auth-token', localStorage.getItem("xAuthToken")),
      reportProgress: true,
      responseType: 'text',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8181/upload/getallfiles');
  }
}
