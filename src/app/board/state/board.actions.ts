import { Action } from "@ngrx/store";
import { Board } from "../board.model";

export const CREATE_BOARD         = '[Board] Create (->)';
export const DELETE_BOARD         = '[Board] Delete (->)';

export const GET_BOARDS           = '[Board] Get user boards';
export const GET_BOARDS_SUCCESS   = '[Board] Get Success (<-)';

export const SET_CURRENT_BOARD    = '[Board] Set Current board (<-)';

export class GetBoards implements Action {
  readonly type = GET_BOARDS;
}

export class GetBoardsSuccess implements Action {
  readonly type = GET_BOARDS_SUCCESS;
  constructor(public payload: { boards: Board[] }) { }
}

export class CreateBoard implements Action {
  readonly type = CREATE_BOARD;
  constructor(public payload: { name: string }) { }
}

export class DeleteBoard implements Action {
  readonly type = DELETE_BOARD;
  constructor(public payload: { id: string }) { }
}

export class SetCurrentBoard implements Action {
  readonly type = SET_CURRENT_BOARD;
  constructor(public payload: { board: Board }) { }
}

export type All
= GetBoards
| GetBoardsSuccess
| CreateBoard
| DeleteBoard
| SetCurrentBoard;