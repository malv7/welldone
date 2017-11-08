import * as BoardActions from './board.actions';
import { Board } from '../board.model';

export interface State {
  boards: Board[]
  currentBoard: Board; // id
}

const initialState: State = {
  boards: [],
  currentBoard: undefined
}

export function reducer(state = initialState, action: BoardActions.All): State {
  switch (action.type) {

    case BoardActions.GET_BOARDS_SUCCESS: {
      return {
        ...state,
        boards: action.payload.boards
      }
    }

    case BoardActions.SET_CURRENT_BOARD: {
      return {
        ...state,
        currentBoard: action.payload.board
      }
    }

    default: return state;
  }
}