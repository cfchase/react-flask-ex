import { combineEpics } from 'redux-observable';
import { statusEpic } from './status';

export const rootEpic = combineEpics(
  statusEpic
);
