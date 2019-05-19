import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: './user-list/user-list.module#UserListModule'},
  { path: 'details/:login', loadChildren: './details-page/details-page.module#DetailsPageModule'},
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
