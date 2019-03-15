import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';
import { DataAPIActions } from './actions/data.actions';
import { DataAPIEpics } from './epics/data.epics';
import { RootEpics } from './epics';

@NgModule({
  imports: [
    NgReduxModule,
	NgReduxRouterModule
  ],
  providers: [RootEpics, DataAPIEpics, DataAPIActions]
})
export class StoreModule { 
  constructor(
    public store: NgRedux<any>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics,
  ) {
    
    store.configureStore(
      rootReducer,
      {},
      [ createLogger(), ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);
}
}
