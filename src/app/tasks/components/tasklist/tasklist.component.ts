import { TasksService } from '../../services/tasks.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../models';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../reducers';

import { Observable } from 'rxjs/Observable';

import { LoadTasks, AddTask } from './../../state/tasks.actions';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasklistComponent implements OnInit {

  edit = false; // new-task guard
  taskIds: Observable<string[]>;
  tasksDone: Observable<number>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadTasks());
    this.taskIds = this.store.select(fromRoot.selectTaskIds);
    this.tasksDone = this.store.select(fromRoot.selectTasksDone);
  }

  add(text: string) {
    this.edit = false;
    this.store.dispatch(new AddTask({ text: text }));
  }

}
