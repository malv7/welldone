import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../reducers';
import { Board } from '../../board.model';
import { Observable } from 'rxjs/Observable';
import { CreateBoard, GetBoards, DeleteBoard, SetCurrentBoard } from './../../state/board.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  boards: Observable<Board[]>;
  currentBoard: Observable<Board>;

  // board creation form
  form = new FormGroup({ text: new FormControl('', [ Validators.required ]) });

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch( new GetBoards() );
    this.currentBoard = this.store.select(fromRoot.selectCurrentBoard);
    this.boards = this.store.select(fromRoot.selectBoards);
  }

  create(): void {
    const name = this.form.get('text').value;
    this.store.dispatch( new CreateBoard({ name: name }) );
  }

  delete(id: string): void {
    this.store.dispatch( new DeleteBoard({ id: id }) );
  }

  setNavigatedBoard(board: Board): void {
    this.store.dispatch( new SetCurrentBoard({ board: board }) );
  }

}



