import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs/Observable';
import { User } from './tasks/models';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  template: `
    <div [ngStyle]="{ 'font-size': (fontSize | async) }">
      <user-configuration></user-configuration>
      <boards *ngIf="user | async"></boards>
      <login *ngIf="!(user | async)"></login>
    </div>
    {{ user | async | json }} (app.component)
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
    private userService: UserService // IMPORTANT!!!
  ) {
    this.fontSize = this.store.select(fromRoot.selectFontSize);
    this.user = this.store.select(fromRoot.getUser);
  }
}
