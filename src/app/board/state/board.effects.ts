import * as BoardActions from './board.actions';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { BoardService } from '../services/board.service';
import * as fromRoot from './../../reducers';

@Injectable()
export class BoardEffects {
  
  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private boardService: BoardService
  ) { }

  @Effect()
  boards = this.actions.ofType(BoardActions.GET_BOARDS)
    .switchMap((action: BoardActions.GetBoards) => this.boardService.getBoards())
    .map(boards => new BoardActions.GetBoardsSuccess({ boards: boards }));

  @Effect({ dispatch: false })
  createBoard = this.actions.ofType(BoardActions.CREATE_BOARD)
    .map((action: BoardActions.CreateBoard) => this.boardService.createBoard(action.payload.name))
    .map(() => null);

  // TODO: check delete and current board equality in a (new) deleteSuccess action?
  @Effect({ dispatch: false })
  deleteBoard = this.actions.ofType(BoardActions.DELETE_BOARD)
    .map((action: BoardActions.DeleteBoard) => {
      // is the board to delete the current board?
      this.store.select(fromRoot.selectCurrentBoard).subscribe(currentBoard => {
        
        if (action.payload.id && currentBoard.id === action.payload.id) {
          // if so set current board to undefined
          this.store.dispatch( new BoardActions.SetCurrentBoard({ board: null }) );
          return this.boardService.deleteBoard(action.payload.id);
        }
      });
    })
    .map(() => null);

}