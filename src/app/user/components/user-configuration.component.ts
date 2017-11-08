import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../reducers';
import * as UserActions from './../state/user.actions';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'user-configuration',
  template: `
    <form [formGroup]="form">
    
      <div class="configButton" *ngIf="!edit">
        <i (click)="edit = !edit" class="fa fa-cog"></i>
      </div>

      <div class="config" *ngIf="edit">
        <i (click)="edit = !edit" class="fa fa-check"></i>
        <div class="settings">
          font size: <input [ngStyle]="{ 'width': '50px' }" formControlName="fontSize">
        </div>
      </div>

    </form>
  `,
  styles: [`

    .configButton { position: absolute;}

    .config {
      width: 100%;
      background: rgba(200, 200, 200, 0.1);
      border-bottom: solid rgba(0,0,0,1) 0.5px;
    }

    i:hover { cursor: pointer; }
    i { color: black; margin: 1em 0 0 2em; }
    .fa-check { color: green; }

    .settings {
      margin: 1em 0 1em 0.5em;
    }
  
  `]
})
export class UserConfiguration implements OnDestroy {
  
  edit = false;
  val = '16px';
  form: FormGroup;
  
  fontSizeSub: Subscription;

  constructor(private store: Store<fromRoot.State>) {

    this.form = new FormGroup({
      fontSize: new FormControl(this.val, [Validators.required])
    });

    this.fontSizeSub =  this.store.select(fromRoot.selectFontSize).subscribe(val => this.val = val);

    this.form.valueChanges.subscribe(() => {
      const fontSize = this.form.get('fontSize').value;
      this.store.dispatch( new UserActions.UpdateFontsize({ fontsize: fontSize }) );
    })
  }

  ngOnDestroy(): void {
    if(this.fontSizeSub) this.fontSizeSub.unsubscribe();
  }

}