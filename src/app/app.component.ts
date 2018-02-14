import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs/Observable';
import { User } from './tasks/models';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  template: `
    <!--
    <div [ngStyle]="{ 'font-size': (fontSize | async) }">
      <user-configuration></user-configuration>
      <router-outlet *ngIf="user | async"></router-outlet>
      <login *ngIf="!(user | async)"></login>
    </div>
    -->
    <boards *ngIf="user | async"></boards>
    <router-outlet></router-outlet>
    <!-- {{ user | async | json }} (app.component) -->
  `,
  styles: [`

    :host {
      display: block;
      min-width: 100vw;
      min-height: 100vh;
    }

  `]
})
export class AppComponent {

  fontSize: Observable<string>;
  user: Observable<User>;

  constructor(
    private store: Store<fromRoot.State>,
    // inject userService on bootstrap of app.component to guarantee user auth afap.
    // private userService: UserService
  ) {
    this.fontSize = this.store.select(fromRoot.selectFontSize);
    this.user = this.store.select(fromRoot.getUser);
    // this.user.subscribe(user => console.log(user));
  }
}
