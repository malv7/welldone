import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../reducers';
import * as BoardActions from './../../state/board.actions';
import { Board } from '../../board.model';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import 'rxjs/add/operator/take';

@Component({
  selector: 'boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  boards: Observable<Board[]>;
  form = new FormGroup({ text: new FormControl('', [Validators.required]) });

  constructor(private store: Store<fromRoot.State>, private router: Router) { }

  ngOnInit() {
    // this.store.dispatch(new BoardActions.GetBoards());
    this.boards = this.store.select(fromRoot.selectBoards);
  }

  create(): void {
    const name = this.form.get('text').value;
    const board: Board = { id: '', name: name };
    // this.store.dispatch(new BoardActions.CreateBoard({ board: board }));
  }

  delete(id: string): void {
    // this.store.dispatch(new BoardActions.DeleteBoard({ id: id }));
  }

  deleteBoard(id: string): void {
    // this.store.dispatch(new BoardActions.DeleteBoard({ id: id }));
  }

  bla(x) {
    console.log(x);
  }

}



