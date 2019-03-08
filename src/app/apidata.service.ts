import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Album } from './models/album';
import { Photo } from './models/photo';

@Injectable()
export class ApidataService {

  URL = `https://jsonplaceholder.typicode.com`;
  URL_USERS = '';
  URL_ALBUMS = '';
  URL_PHOTOS = '';
  constructor(private http: Http) {
	this.URL_USERS = `${this.URL}/users`;
	this.URL_ALBUMS = `${this.URL}/albums`;
	this.URL_PHOTOS = `${this.URL}/photos`;
  }
  
  public getDetailUesr(id: any): Observable<any> {
	  let url = `${this.URL_USERS}/${id}`;
	  console.log(url);
    return this.http.get(url).map((res: Response) => {
		console.log(res);
      return res.json();
    }).catch(error => this.handleError(error));
  }
  public loadUsers(): Observable<any>{
    let url = this.URL_USERS;
	console.log('get users', url);
    return this.http.get(url).map((res: Response) => {
		console.log(res);
      return res.json();
    }).catch(error => this.handleError(error));
  }
  
  public loadAlbums(): Observable<Album[]>{
    let url = this.URL_ALBUMS;
	console.log(url);
    return this.http.get(url).map((res: Response) => {
      return res.json();
    }).catch(error => this.handleError(error));
  }
  
  public loadPhotos(): Observable<Photo[]>{
    let url = this.URL_PHOTOS;
	console.log(url);
    return this.http.get(url).map((res: Response) => {
      return res.json();
    }).catch(error => this.handleError(error));	  
  }
  
  private handleError(error) {
    return Observable.throw(error.json().error || 'Some thing went wrong please try again! :(');
  }  

}
