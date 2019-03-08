import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { UsersComponent } from '../users/users.component';
import { PhotosComponent } from '../photos/photos.component';
import { UserViewComponent } from '../user-view/user-view.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/users', pathMatch: 'full' },
	{ path: 'users',  component: UsersComponent },
	{ path: 'photos/:id',  component: PhotosComponent },
	{ path: 'user/:id',  component: UserViewComponent }];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingRoutingModule,
	RouterModule.forRoot(
		appRoutes,
		{ enableTracing: false }
	)
  ],
  exports: [
    RouterModule
  ],  
  declarations: []
})
export class AppRoutingModule { }
