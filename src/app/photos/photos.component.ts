import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApidataService } from '../apidata.service';
import 'rxjs/add/operator/take';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos: Photo[];
  constructor(
	private route: ActivatedRoute,
	private router: Router,
	public apidata: ApidataService  
  ) { }

  ngOnInit() {
	  let id = this.route.snapshot.paramMap.get('id');
	  if (id) {
		  this.apidata.loadPhotos().subscribe((res) => {
			  let newdata = res.filter((item) => {
				  return item.albumId == id;
			  });
			  this.photos = newdata;
		  });
	  }
  }
  
  public back(){
	  this.router.navigate(['/users']);
  }

}
