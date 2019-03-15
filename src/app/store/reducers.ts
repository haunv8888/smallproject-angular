import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { DATA_TYPES } from './model';
import * as data from './reducers/data.reducer';



export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    users: data.createDataAPIReducer(DATA_TYPES.USERS),
    userdetail: data.createDataAPIReducer(DATA_TYPES.USERS_DETAIL),
	photos: data.createDataAPIReducer(DATA_TYPES.PHOTOS),
	albums: data.createDataAPIReducer(DATA_TYPES.ALBUMS),
    router: routerReducer,
  }));
