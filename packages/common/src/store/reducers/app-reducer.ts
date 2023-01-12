import {Actions} from '../actions';
import {State} from '../state';

export type AppReducer<
  TState extends keyof State,
  TAdditionalActions = Actions,
> = (
  state: State[TState] | undefined,
  action: Actions | TAdditionalActions,
) => State[TState];
