import { BrowserModule } from '@angular/platform-browser';
//import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { ApidataService } from './apidata.service';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
//import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';




@NgModule({
  declarations: [
    AppComponent,
	UsersComponent,
	UserViewComponent,
	AlbumsComponent,
	PhotosComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule,
	HttpModule
  ],
  providers: [ApidataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
