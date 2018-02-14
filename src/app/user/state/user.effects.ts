import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as UserActions from './user.actions';
import { UserService } from "../user.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserEffects {

  constructor(
    private userService: UserService,
    private actions: Actions
  ) { }

  @Effect({ dispatch: false })
  updateUser = this.actions.ofType(UserActions.SET_USER)
    .do((action: UserActions.SetUser) => this.userService.setUser(action.payload.user));

}