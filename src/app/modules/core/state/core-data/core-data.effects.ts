import { Injectable } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  CoreDataStateActionTypes
} from './core-data.actions';
import { Observable, of} from 'rxjs/index';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { CoreUiStateActionTypes } from '../core-ui/core-ui.actions';
import { Router } from '@angular/router';
import {
  GenericLoadError,
  LoadDirectCostsSuccess,
  LoadOpexSummarySuccess, LoadRechargesSummarySuccess,
  LoadVersionsSuccess
} from './action-subsets/load-planning-tables.actions';

@Injectable()
export class CoreDataEffects {

  constructor(
    private restService: RestService,
    private actions$: Actions,
    private router: Router
  ) {}

  /**
   * DIRECT COSTS
   * @type {Observable<any>}
   */
  @Effect()
  loadDirectCosts$: Observable<Action> = this.actions$.pipe(
      ofType(CoreDataStateActionTypes.LOAD_DIRECT_COSTS),
      mergeMap(() =>
        this.restService.doGet('data/costs/direct').pipe(
          map(data => new LoadDirectCostsSuccess(data[0])),
          catchError(() => of(new GenericLoadError('Direct Costs')))
        )
      )
  );

  /**
   * NAVIGATE WITH NgRX
   * @type {Observable<any>}
   */
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(CoreUiStateActionTypes.NAVIGATE_TO),
    map((action: Action) => this.router.navigate([action['payload']])
  ));

  /**
   * VERSIONS
   * @type {Observable<any>}
   */
  @Effect()
  loadVersions$: Observable<Action> = this.actions$.pipe(
    ofType(CoreDataStateActionTypes.LOAD_VERSIONS),
    mergeMap(() =>
      this.restService.doGet('data/versions').pipe(
        map(data => new LoadVersionsSuccess(data[0])),
        catchError(() => of(new GenericLoadError('Versions')))
      )
    )
  );

  /**
   * OPEX SUMMARY
   * @type {Observable<any>}
   */
  @Effect()
  loadOpex$: Observable<Action> = this.actions$.pipe(
    ofType(CoreDataStateActionTypes.LOAD_OPEX_SUMMARY),
    mergeMap(() =>
      this.restService.doGet('data/cost/opex').pipe(
        map(data => new LoadOpexSummarySuccess(data[0])),
        catchError(() => of(new GenericLoadError('Opex Summary')))
      )
    )
  );

  /**
   * RECHARGES SUMMARY
   * @type {Observable<any>}
   */
  @Effect()
  loadRecharges: Observable<Action> = this.actions$.pipe(
    ofType(CoreDataStateActionTypes.LOAD_RECHARGES_SUMMARY),
    mergeMap(() =>
      this.restService.doGet('data/recharges').pipe(
        map(data => new LoadRechargesSummarySuccess(data[0])),
        catchError(() => of(new GenericLoadError('Recharges')))
      )
    )
  );
}
