import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {AddNewBookComponent} from "./component/add-new-book/add-new-book.component";

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
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
