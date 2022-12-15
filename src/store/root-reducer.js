import {combineReducers} from 'redux';

import {todos} from './todos/todos-reducer';
import { filter } from './filters/filters-reducer';

export const rootReducer = combineReducers({
  todos,
  filter
});