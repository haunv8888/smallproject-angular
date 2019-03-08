import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApidataService } from '../apidata.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

	userData: any;
	albumData: any;
	constructor(
	private route: ActivatedRoute,
	private router: Router,
	public apidata: ApidataService
	) { 
	}

  ngOnInit() {
	  let id = this.route.snapshot.paramMap.get('id');
	  if (id) {
		  this.apidata.getDetailUesr(id).subscribe((res) => {
			  this.userData = res;
		  });
		  this.apidata.loadAlbums().subscribe((res) => {
			let newdata: any = [];
			newdata = res.filter((item) => {
				return item.userId==id;
			});
			  this.albumData = newdata;
		  });
	  }
  
	}
   protected back(): void{
	   this.router.navigate(['/users']);
   }
}