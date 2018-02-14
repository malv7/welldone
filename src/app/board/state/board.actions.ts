import { Action } from "@ngrx/store";
import { Board } from "../board.model";

export const QUERY          = '[Board] query boards';
export const ADDED          = '[Board] added';
export const MODIFIED       = '[Board] modified';
export const REMOVED        = '[Board] removed';
export const UPDATE         = '[Board] update';
export const UPDATE_SUCCESS = '[Board] update success';

export class Query implements Action {
  readonly type = QUERY;
  constructor() { }
}

export class Added implements Action {
  readonly type = ADDED;
  constructor(public board: Board) { }
}

export class Modified implements Action {
  readonly type = MODIFIED;
  constructor(public payload: Board) { }
}

export class Removed implements Action {
  readonly type = REMOVED;
  constructor(public payload: Board) { }
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public changes: Partial<Board>) { }
}

export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor() { }
}

export type BoardActions = 
  Query |
  Added |
  Modified |
  Removed |
  Update |
  UpdateSuccess;

