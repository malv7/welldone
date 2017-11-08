import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";
import { Task, Section, User } from "../models";
import { UserService } from "../../user/user.service";
import { persist, USERS, BOARDS, SECTIONS, TASKS } from "../../state/collections";

@Injectable()
export class TasksService {

  // user: string;
  currentBoard: string;

  constructor(
    private afs: AngularFirestore,
    private userService: UserService
  ) {
    // this.userService.user.subscribe(user => this.user = user);
    // DELETE keys
    // const ids = [];
    // ids.forEach(id => this.afs.doc('tasks/' + id).delete());
  }

  getSections(): Observable<Section[]> {
    return this.afs.collection<Section>(this.currentBoard + SECTIONS).valueChanges();
  }

  createSection(name: string): void {
    const section: Section = { name: 'testsection' };
    const sections = this.afs.collection<Section>(this.currentBoard + SECTIONS);
    persist(sections, section);
  }

  deleteSection(id: string): void {
    this.afs.doc(this.currentBoard + SECTIONS + id).delete();
  }

  deleteTask(sectionId: string, taskId: string): void {
    this.afs.doc(this.currentBoard + SECTIONS + sectionId + TASKS + taskId);
  }

  createTask(sectionId: string, text: string): void {
    const task = this.constructTask(text);
    const tasks = this.afs.collection<Task>(this.currentBoard + SECTIONS + sectionId + TASKS);
    persist(tasks, task);
  }

  updateTask(sectionId: string, partial: Partial<Task>): void {
    this.afs.doc(this.currentBoard + SECTIONS + sectionId + TASKS + partial.id).update(partial);
  }

  getTasks(sectionId: string): Observable<Task[]> {
    return this.afs.collection<Task>(this.currentBoard + SECTIONS + sectionId + TASKS).valueChanges();
  }

  constructTask(text: string): Task {

    const split = text.split('\n');
    const title = split.shift(); // string before first enter in textfield
    const description = split.join(''); // strings after first enter in textfield

    const task: Task = {
      title: title,
      description: description,
      startTime: Date.now(),
      done: false,
      archived: false
    }

    return task;
  }

}