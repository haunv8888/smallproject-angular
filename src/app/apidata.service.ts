import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty'
import { Album } from './models/album';
import { Photo } from './models/photo';
import { DATA_TYPES } from './store/model';

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
  
  public loadData = (type: string, id: string = null): Observable<any>=> {
	  if (DATA_TYPES.USERS == type) return this.loadUsers();
	  if (DATA_TYPES.USERS_DETAIL == type && id !== null) return this.getDetailUesr(id);
	  if (DATA_TYPES.PHOTOS == type && id) return this.loadPhotos(id);
	  if (DATA_TYPES.ALBUMS == type && id) return this.loadAlbums(id);
	  return Observable.empty();
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
  
  public loadAlbums(id: string): Observable<Album[]>{
    let url = this.URL_ALBUMS;
	console.log(url);
    return this.http.get(url).map((res: Response) => {
		let data: any = res.json().filter((item)=>item.userId == id)
      return data;
    }).catch(error => this.handleError(error));
  }
  
  public loadPhotos(id: string): Observable<Photo[]>{
    let url = this.URL_PHOTOS;
	console.log(url);
    return this.http.get(url).map((res: Response) => {
		let data: any = res.json().filter((item)=>item.albumId == id)
      return data;		
    }).catch(error => this.handleError(error));	  
  }
  
  private handleError(error) {
    return Observable.throw(error.json().error || 'Some thing went wrong please try again! :(');
  }  

}
