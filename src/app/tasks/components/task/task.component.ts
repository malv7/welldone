import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../models';
import { TasksService } from '../../services/tasks.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {

  task: Task = {
    id: '',
    done: false,
    archived: false,
    description: '',
    title: 'loading...',
    startTime: 0
  };
  
  @Input() id: string;
  expanded = false;

  tasksCollection: AngularFirestoreCollection<Task>;

  constructor(private ts: TasksService, private afs: AngularFirestore) {
    this.tasksCollection = afs.collection<Task>('tasks');
  }

  ngOnInit() {
    this.tasksCollection.doc(this.id).valueChanges().subscribe(task => this.task = task as Task);
  }

  done() {
    const task: Partial<Task> = { ...this.task, done: !this.task.done, endTime: Date.now() };
    // this.ts.update(task);
  }

  delete() {
    // this.ts.delete(this.id);
  }

}
