import { Action } from '@ngrx/store';
import { User } from '../../tasks/models';

export const UPDATE_FONTSIZE = '[User Config] Update font size';
export const SET_USER = '[User] Update user (<-)';

export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: { user: User }) { }
}

export class UpdateFontsize implements Action {
  readonly type = UPDATE_FONTSIZE;
  constructor(public payload: { fontsize: string }) { }
}

export type All
  = UpdateFontsize
  | SetUser;