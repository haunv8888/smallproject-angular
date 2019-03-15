import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApidataService } from '../apidata.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';
import { select, select$ } from '@angular-redux/store';
import { pipe, values, sortBy, prop } from 'ramda';
import { DataAPIActions } from '../store/actions/data.actions';
import { DATA_TYPES } from '../store/model';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
	
  @select$(['photos', 'items'], (photosDictionary$: Observable<{}>) => photosDictionary$.map(pipe(values)))
  readonly photoData$: Observable<any>;

  @select(['photos', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['photos', 'error'])
  readonly error$: Observable<any>;
  
  public photos: Photo[];
  public userid: string;
  constructor(
	private route: ActivatedRoute,
	private router: Router,
	private actions: DataAPIActions,
	public apidata: ApidataService  
  ) { }

  ngOnInit() {
	  let id = this.route.snapshot.paramMap.get('id');
	  let userid = this.route.snapshot.paramMap.get('userid');
	  if (id && userid) {
		  this.userid = userid;
		this.actions.loadData(DATA_TYPES.PHOTOS, id);
	  }
  }
  
  public back(){
	  this.router.navigate(['/user', this.userid]);
  }

}
