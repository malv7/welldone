import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as UserActions from './user.actions';
import { UserService } from "../user.service";

@Injectable()
export class UserEffects {

constructor(
  private userService: UserService,
  private actions: Actions
) { }

// TODO: aufgehört:
@Effect({ dispatch: false })
updateUser = this.actions.ofType(UserActions.GET_USER)
  .map((action: UserActions.GetUser) => this.userService.setUser(action.payload.user))
  .map(() => null);

}