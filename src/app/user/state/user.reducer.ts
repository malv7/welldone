import * as UserActions from './user.actions';
import { User } from '../../tasks/models';

export interface State {
  user: User;
  fontsize: string;
}

const initialState: State = {
  user: undefined,
  fontsize: '16px'
}

export function reducer(state = initialState, action: UserActions.All): State {

  switch (action.type) {

    case UserActions.UPDATE_FONTSIZE: {
      return { ...state, fontsize: action.payload.fontsize };
    }

    case UserActions.GET_USER: {
      return { ...state, user: action.payload.user };
    }
  
    default: return state;
  }

}