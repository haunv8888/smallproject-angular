import { Injectable } from '@angular/core';
import { DataAPIEpics } from './epics/data.epics';
import { DATA_TYPES } from './model';

@Injectable()
export class RootEpics {

  constructor(private dataApiEpice: DataAPIEpics) { }
  public createEpics() {
	  return [this.dataApiEpice.createEpic(DATA_TYPES.USERS), 
	  this.dataApiEpice.createEpic(DATA_TYPES.USERS_DETAIL), 
	  this.dataApiEpice.createEpic(DATA_TYPES.PHOTOS),
	  this.dataApiEpice.createEpic(DATA_TYPES.ALBUMS),
	  ];
  }

}
