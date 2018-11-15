import { Action } from '@ngrx/store';
import { User } from '../models/user';

export enum UserActionTypes {
  Add = '[Users] Add new user',
  AddMore = '[Users] Add more new users'
}

export class ActionAddUser implements Action {
  readonly type = UserActionTypes.Add;

  constructor(public payload: User) {}
}

export class ActionAddMoreUser implements Action {
  readonly type = UserActionTypes.AddMore;

  constructor(public payload: User[]) {}
}

export type UsersActions = ActionAddUser | ActionAddMoreUser;
