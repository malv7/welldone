import { Action } from '@ngrx/store';
import { Task } from '../models';

// export const ADD_BOARD =          '[Board] Add';
// export const LOAD_BOARD =         '[Board] Load';
// export const LOAD_BOARDS =        '[Board] Load Boards';
// export const UPDATE_BOARD_NAME =  '[Board] Update Name'
// export const DELETE_BOARD =       '[Board] Delete';

// export const ADD_SECTION =        '[Section] Add';
// export const UPDATE_SECTION =     '[Section] Update';
// export const DELETE_SECTION =     '[Section] Delete';

export const LOAD_TASKS =         '[Tasks] Load';
export const LOAD_TASKS_SUCCESS = '[Tasks] Load Success';
export const ADD_TASK =           '[Task] Add';
export const ADD_TASK_SUCCESS =           '[Task] Add Success';
export const UPDATE_TASK =        '[Task] Update';
// export const UPDATE_TASKS =       '[Task] Update Tasks';
export const DELETE_TASK =        '[Task] Delete';
// export const DELETE_TASKS =       '[Task] Delete Tasks';
// export const ARCHIVE_TASK =       '[Task] Archive';
// export const ARCHIVE_DONE_TASKS = '[Task] Archive all done tasks';
export const DONE_COUNTER = 'Done Counter';

export class LoadTasks implements Action {
  readonly type = LOAD_TASKS;
}

export class LoadTasksSuccess implements Action {
  readonly type = LOAD_TASKS_SUCCESS;
  constructor(public payload: {
    tasks: Task[],
    taskIds: string[],
    tasksDone: number
  }) { }
}

export class AddTask implements Action {
  readonly type = ADD_TASK;
  constructor(public payload: { text: string }) { }
}

export class AddTaskSuccess implements Action {
  readonly type = ADD_TASK_SUCCESS;
}

export class UpdateTask implements Action {
  readonly type = UPDATE_TASK;
  constructor(public payload: { task: { id: string, changes: Task } }) { }
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload: { id: string }) { }
}

export type All
  = AddTask
  | AddTaskSuccess
  | UpdateTask
  | DeleteTask
  | LoadTasks
  | LoadTasksSuccess;