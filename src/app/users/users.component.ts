import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { select, select$ } from '@angular-redux/store';
import { pipe, values, sortBy, prop } from 'ramda';
import { DataAPIActions } from '../store/actions/data.actions';
import { DATA_TYPES } from '../store/model';
import { IUser } from '../models/users';

export const sortUsers = (userDictionary$: Observable<{}>) =>
  userDictionary$.map(
    pipe(
      values));
	  
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
	
  @select$(['users', 'items'], sortUsers)
  readonly users$: Observable<IUser[]>;

  @select(['users', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['users', 'error'])
  readonly error$: Observable<any>;	
  
  constructor(public apidata: ApidataService, private _router: Router, private actions: DataAPIActions) { 

	this.actions.loadData(DATA_TYPES.USERS);
  }

  ngOnInit() {
  }

  public itemDetail(item: any): void {
	  this._router.navigate(['/user', item.id]);
  }
}
