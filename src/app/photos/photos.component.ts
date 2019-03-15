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
  public userid: string;
  constructor(
	private route: ActivatedRoute,
	private router: Router,
	public apidata: ApidataService  
  ) { }

  ngOnInit() {
	  let id = this.route.snapshot.paramMap.get('id');
	  let userid = this.route.snapshot.paramMap.get('userid');
	  if (id && userid) {
		  this.userid = userid;
		  this.apidata.loadPhotos(id).subscribe((res) => {
			  let newdata = res.filter((item) => {
				  return item.albumId == id;
			  });
			  this.photos = newdata;
		  });
	  }
  }
  
  public back(){
	  this.router.navigate(['/user', this.userid]);
  }

}
