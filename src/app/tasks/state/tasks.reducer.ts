import { EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import * as TasksActions from './tasks.actions';
import { Task } from '../models';

export interface State {
  tasks: Task[];
  taskIds: string[];
  tasksDone: number;

  // boards: Board[];
}

const initialState: State = {
  tasks: [],
  taskIds: [],
  tasksDone: 0,

  // boards: []
};

export function reducer(state = initialState, action: TasksActions.All): State {
  
  switch (action.type) {

    case TasksActions.LOAD_TASKS_SUCCESS: {
      return {
        ... state,
        tasks: action.payload.tasks,
        taskIds: action.payload.taskIds,
        tasksDone: action.payload.tasksDone
        // tasksDone: action.payload.
      };
    }

    default: return state;
  }
}