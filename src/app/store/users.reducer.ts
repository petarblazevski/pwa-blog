import { Action } from '@ngrx/store';
import { UserActionTypes, UsersActions } from './users.actions';

export const initialState = [];

export function usersReducer(state = initialState, action: UsersActions) {
  switch (action.type) {
    case UserActionTypes.Add: {
      return [...state, action.payload];
    }

    case UserActionTypes.AddMore: {
      return [...state, ...action.payload];
    }
  }

  return state;
}
