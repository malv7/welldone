import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../reducers';
import { User } from '../../../tasks/models';
import * as BoardActions from './../../state/board.actions';
import { Subscription } from 'rxjs/Subscription';
import { Board } from '../../board.model';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  board: Observable<Board>;

  allUsers: Observable<User[]>;
  boardUsers: User[];

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.board = this.store.select(fromRoot.selectCurrentBoard);
  }

  delete(): void {
    this.board.subscribe(board => {
      this.store.dispatch( new BoardActions.DeleteBoard({ id: board.id }) );
    }).unsubscribe();
  }

}
