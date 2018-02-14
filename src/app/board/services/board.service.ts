import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { UserService } from "../../user/user.service";
import { USERS, BOARDS, persist } from "../../state/collections";
import { Board } from "../board.model";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as fromRoot from './../../reducers';
import { User } from "../../tasks/models";

import 'rxjs/add/operator/take';

@Injectable()
export class BoardService {

  user: User;

  constructor(
    private afs: AngularFirestore,
    private store: Store<fromRoot.State>
  ) {
    store.select(fromRoot.getUser).subscribe(user => this.user = user);
  }

  deleteBoard(id: string): void {
    this.afs.doc(USERS + this.user.id + BOARDS + id).delete();
  }

  createBoard(name: string): void {
    const boards = this.afs.collection<Board>(USERS + this.user.id + BOARDS);
    const board: Board = { id: '', name: name };
    persist(boards, board);
  }

  getBoards(): Observable<Board[]> {
    return this.afs.collection<Board>(USERS + this.user.id + BOARDS).valueChanges();
  }

  // TODO: evaluate, when is user there?
  deleteAllBoards(): void {
    
    console.log(this.user);

    this.afs.collection<Board>(USERS + this.user.id + BOARDS).valueChanges().take(1).subscribe(boards => {
      boards.forEach(board => this.afs.doc(USERS + this.user.id + BOARDS + board.id).delete());
    });
  }

}