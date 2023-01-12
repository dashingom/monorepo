import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {State} from '../state';

import {AuthenticationActions} from './authentication-actions';

export const Actions = {
  Authentication: AuthenticationActions,
};

export type Actions = AuthenticationActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  null,
  Action<Actions['type']>
>;
