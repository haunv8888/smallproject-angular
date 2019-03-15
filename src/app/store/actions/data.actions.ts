import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = any[];
interface MetaData { dataType: string; id?: string; };
export type DataAPIAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class DataAPIActions {
  static readonly LOAD_DATA = 'LOAD_DATA';
  static readonly LOAD_DATA_DETAIL = 'LOAD_DATA_DETAIL';
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  @dispatch()
  
  loadData = (dataType: string, id: string = null): DataAPIAction => ({
    type: DataAPIActions.LOAD_DATA,
    meta: { dataType , id},
    payload: null,
  });

  loadStarted = (dataType: string): DataAPIAction => ({
    type: DataAPIActions.LOAD_STARTED,
    meta: { dataType },
    payload: null,
  })

  loadSucceeded = (dataType: string, payload: Payload): DataAPIAction => ({
    type: DataAPIActions.LOAD_SUCCEEDED,
    meta: { dataType },
    payload,
  })

  loadFailed = (dataType: string, error): DataAPIAction => ({
    type: DataAPIActions.LOAD_FAILED,
    meta: { dataType },
    payload: null,
    error,
  })
}
