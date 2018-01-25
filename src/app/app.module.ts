import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import 'hammerjs';

import {routing} from './app.routing';

import {LoginService} from "./service/login.service";
import {AddBookService} from "./service/add-book.service";
import {UploadImageService} from "./service/upload-image.service";
import {GetBookListService} from "./service/get-book-list.service";
import {GetBookServiceService} from "./service/get-book-service.service";


import {AppComponent} from './app.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {LoginComponent} from './component/login/login.component';
import {AddNewBookComponent} from './component/add-new-book/add-new-book.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { ViewBookComponent } from './component/view-book/view-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
