import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { DataState } from '../model';
import { DataAPIAction, DataAPIActions } from '../actions/data.actions';
import { ApidataService } from '../../apidata.service';


const actionIsForCorrectDataType = (dataType: string) =>
  (action: DataAPIAction): boolean =>
    action.meta.dataType === dataType;

@Injectable()
export class DataAPIEpics {
  constructor(
    private service: ApidataService,
    private actions: DataAPIActions,
  ) {}

  public createEpic(dataType: string) {
    return createEpicMiddleware(this.createLoadDataEpic(dataType));
  }

  private createLoadDataEpic(dataType: string): Epic<DataAPIAction, DataState> {
    return (action$, store) => action$
      .ofType(DataAPIActions.LOAD_DATA)
      .filter(action => actionIsForCorrectDataType(dataType)(action))
      .switchMap((action) => {
		  let serviceLoad: Observable<any>;
		  if (typeof action.meta.id !== null) {
			  let id = action.meta.id;
			  serviceLoad = this.service.loadData(dataType, id);
		  } else {
			  serviceLoad = this.service.loadData(dataType);
		  }
		  return serviceLoad.map(data => this.actions.loadSucceeded(dataType, data))
        .catch(response => of(this.actions.loadFailed(dataType, {
          status: '' + response.status,
        })))
	  .startWith(this.actions.loadStarted(dataType))
	  });
  }
}
