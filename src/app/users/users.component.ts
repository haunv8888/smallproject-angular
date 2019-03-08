import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  
  public usersData$: Observable<any>;
  public dataObj: any;
  constructor(public apidata: ApidataService, private _router: Router) { 
	//this.usersData$ = this.apidata.loadUsers();
	this.apidata.loadUsers().subscribe((res) => {
		this.dataObj = res;
	});
  }

  ngOnInit() {
  }

  public itemDetail(item: any): void {
	  this._router.navigate(['/user', item.id]);
  }
}
