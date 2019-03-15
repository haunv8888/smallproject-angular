import { DataAPIAction, DataAPIActions } from '../actions/data.actions';
import { IDataList } from '../model';
import { indexBy, prop } from 'ramda';
import { Action } from 'redux';



const INITIAL_STATE: IDataList = {
  items: {},
  loading: false,
  error: null,
};


export function createDataAPIReducer(dataType: string) {
  return function dataReducer(state: IDataList = INITIAL_STATE,
    a: Action): IDataList {

    const action = a as DataAPIAction;
    if (!action.meta || action.meta.dataType !== dataType) {
      return state;
    }

    switch (action.type) {
      case DataAPIActions.LOAD_STARTED:
        return {
          ...state,
          items: {},
          loading: true,
          error: null,
        };
      case DataAPIActions.LOAD_SUCCEEDED:
        return {
          ...state,
          items: action.payload,
          loading: false,
          error: null,
        };
      case DataAPIActions.LOAD_FAILED:
        return {
          ...state,
          items: {},
          loading: false,
          error: action.error,
        };
    }
    return state;
  };
}
