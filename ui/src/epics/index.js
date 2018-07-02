import { combineEpics } from 'redux-observable';
import { statusEpics } from './status';

export const rootEpic = combineEpics(
  statusEpics
);
