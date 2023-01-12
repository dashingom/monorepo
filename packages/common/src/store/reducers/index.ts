import {combineReducers} from 'redux';
import {State} from '../state';
import {authReducer} from './auth-reducer';

const Reducer = (): any =>
  combineReducers<State>({
    Authentication: authReducer,
  });

export default Reducer;
