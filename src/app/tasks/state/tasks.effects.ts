import { Injectable } from "@angular/core";
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { TasksService } from "../services/tasks.service";
import * as fromRoot from './../../reducers';
import * as TasksActions from './tasks.actions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class TasksEffects {

  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private tasksService: TasksService
  ) { }

  // @Effect()
  // tasks: Observable<Action> = this.actions.ofType(TasksActions.LOAD_TASKS)
  //   .switchMap((action: TasksActions.LoadTasks) => this.tasksService.getTasks())
  //   .map(tasks => {

  //     let ids = tasks
  //       .filter(task => task.id)
  //       // .filter(task => !task.archived)
  //       .map(task => task.id);

  //     // let done = tasks.filter(task => task.done);
  //     // let notDone = tasks.filter(task => !task.done);

  //     // console.log('done:');
  //     // console.log(done);
  //     // console.log('NOT done:');
  //     // console.log(notDone);

  //     const tasksDone = tasks.filter(task => task.done).length;

  //     return new TasksActions.LoadTasksSuccess({ tasks: tasks, taskIds: ids, tasksDone: tasksDone });
  //   });


  // @Effect()
  // addTask: Observable<Action> = this.actions.ofType(TasksActions.ADD_TASK)
  //   .map((action: TasksActions.AddTask) => this.tasksService.add(action.payload.text))
  //   .map(res => new TasksActions.AddTaskSuccess());

}