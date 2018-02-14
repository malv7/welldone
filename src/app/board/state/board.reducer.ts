import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import * as BoardActions from './board.actions';
import { Board } from '../board.model';

export interface BoardState extends EntityState<Board> { }

const boardAdapter = createEntityAdapter<Board>();
const initialState: BoardState = boardAdapter.getInitialState();

export function boardReducer() {
//   state: BoardState = initialState,
//   action: BoardActions.All
// ): BoardState {

//   switch (action.type) {
//     case BoardActions.ADD_ONE:
//       return boardAdapter.addOne(action.board, state);
      
//     case BoardActions.UPDATE_ONE:
//       return boardAdapter.updateOne({ id: action.id, changes: action.changes}, state);

//     case BoardActions.GET_ALL_SUCCESS:
//       return { ...state,  }
      
//     default:
//       return state;
//   }

}