import * as BoardActions from './board.actions';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { BoardService } from '../services/board.service';
import * as fromRoot from './../../reducers';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { Board } from '../board.model';

@Injectable()
export class BoardEffects {

  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private boardService: BoardService
  ) { }

  // @Effect()
  // getBoards = this.actions.ofType(BoardActions.GET_BOARDS)
  //   .switchMap((action: BoardActions.GetBoards) => this.boardService.getBoards())
  //   .map(boards => new BoardActions.GetBoardsSuccess({ boards: boards }));

  // @Effect({ dispatch: false })
  // createBoard = this.actions.ofType(BoardActions.CREATE_BOARD)
  //   .do((action: BoardActions.CreateBoard) => this.boardService.createBoard(action.payload.board.name));

  // @Effect({ dispatch: false })
  // deleteBoard = this.actions.ofType(BoardActions.DELETE_BOARD)
  //   .do((action: BoardActions.DeleteBoard) => this.boardService.deleteBoard(action.payload.id))

}

