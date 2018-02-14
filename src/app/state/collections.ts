import { AngularFirestoreCollection } from "angularfire2/firestore";
import { User, Section, Task } from "../tasks/models";
import { Board } from "../board/board.model";

export const USERS = '/users/';
export const BOARDS = '/boards/';
export const SECTIONS = '/sections/';
export const TASKS = '/tasks/';

type EntityType = User | Board | Section | Task;

export const persist = (col: AngularFirestoreCollection<EntityType>, doc: EntityType) => {
  col.add(doc).then(ref => col.doc(ref.id).update({ id: ref.id }));
}
