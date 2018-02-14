import * as fromTasks from './tasks/state/tasks.reducer';
import * as fromUser from './user/state/user.reducer';
import * as fromBoard from './board/state/board.reducer';
import { Task, User } from './tasks/models';
import { Board } from './board/board.model';

export interface State {
  // board: fromBoard.State;
  tasks: fromTasks.State;
  user: fromUser.State;
}

export const reducers = {
  tasks: fromTasks.reducer,
  user: fromUser.reducer,
  // board: fromBoard.reducer
}

// Boards
/////////
// export function selectBoards(state: State): Board[] {
//   return state.board.boards;
// }

// User
///////
export function selectFontSize(state: State): string {
  return state.user.fontsize;
}

export function getUser(state: State): User {
  return state.user.user;
}

// Tasks
////////
export function selectTasks(state: State): Task[] {
  return state.tasks.tasks;
}

export function selectTaskIds(state: State): string[] {
  return state.tasks.taskIds;
}

export function selectTasksDone(state: State): number {
  return state.tasks.tasksDone;
}