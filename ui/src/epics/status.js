import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, map, catchError } from "rxjs/operators";
import { ofType } from 'redux-observable';

import {
  TYPE_GET_STATUS,
  getStatusSucceeded,
  getStatusFailed
} from "../actions/status";

export function statusEpics(action$) {
  return action$.pipe(
    ofType(TYPE_GET_STATUS),
    switchMap(action =>
      ajax.getJSON("/api/v1/status").pipe(
        map(post => getStatusSucceeded(post)),
        catchError(error => Observable.of(getStatusFailed(error)))
      )
    )
  );
}
