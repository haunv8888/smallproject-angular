import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApidataService } from '../apidata.service';
import { Observable } from 'rxjs';
import { select, select$ } from '@angular-redux/store';
import { pipe, values, sortBy, prop } from 'ramda';
import { DataAPIActions } from '../store/actions/data.actions';
import { DATA_TYPES } from '../store/model';
//import { IUser } from '../models/users';
	  
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @select(['userdetail', 'items'])
  readonly userData$: Observable<any>;

  @select(['userdetail', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['userdetail', 'error'])
  readonly error$: Observable<any>;
  
  @select$(['albums', 'items'], (albumsDictionary$: Observable<{}>) => albumsDictionary$.map(pipe(values)))
  readonly albumData$: Observable<any>;

  @select(['albums', 'loading'])
  readonly loadingAl$: Observable<boolean>;

  @select(['albums', 'error'])
  readonly errorAl$: Observable<any>;	  
	//userData: any;
	id: string;
	constructor(
	private route: ActivatedRoute,
	private router: Router,
	private actions: DataAPIActions,
	public apidata: ApidataService
	) { 
	}

  ngOnInit() {
	  let id = this.route.snapshot.paramMap.get('id');
	  
	  if (id) {
		  this.id=id;
		  this.actions.loadData(DATA_TYPES.USERS_DETAIL, id);
		  this.actions.loadData(DATA_TYPES.ALBUMS, id);
	  }
  
	}
   protected back(): void{
	   this.router.navigate(['/users']);
   }
}