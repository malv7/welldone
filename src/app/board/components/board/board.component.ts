import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../reducers';
import * as BoardActions from './../../state/board.actions';
import { Board } from '../../board.model';
import 'rxjs/add/operator/take';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board;
  private boardSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.boardSub = this.activatedRoute.paramMap.map(paramMap => paramMap.get('id')).subscribe(x => console.log(x));
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
  }

  delete(): void {
    // this.store.dispatch(new BoardActions.DeleteBoard({ id: this.board.id }));
  }

  ngOnDestroy() {
    this.boardSub.unsubscribe();
  }

}
