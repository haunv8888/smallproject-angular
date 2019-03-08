import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from '../apidata.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input() albums: Album[] = [];
  constructor(public apidata: ApidataService, private _router: Router) { }

  ngOnInit() {
  }

  public photosAlbum(item: any): void{
	  let id = item.id;
	  if (id) {
		  this._router.navigate(['/photos', id]);
	  }
  }
}
