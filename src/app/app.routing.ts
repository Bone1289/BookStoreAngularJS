import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {AddNewBookComponent} from "./component/add-new-book/add-new-book.component";
import {BookListComponent} from "./component/book-list/book-list.component";
import {ViewBookComponent} from "./component/view-book/view-book.component";

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'addNewBook',
  component: AddNewBookComponent
}, {
  path: 'bookList',
  component: BookListComponent
}, {
  path: 'viewBook/:id',
  component: ViewBookComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
