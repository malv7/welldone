import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../tasks/models';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { USERS } from '../state/collections';
import { Store } from '@ngrx/store';
import * as fromRoot from './../reducers';
import * as UserActions from './state/user.actions';

@Injectable()
export class UserService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: Store<fromRoot.State>
  ) {
    this.afAuth.authState.subscribe(user => {
      
      if (user) {
        const _user: User = { id: user.uid, name: 'name' };
        store.dispatch( new UserActions.GetUser({ user: _user }) );
      } else {
        store.dispatch( new UserActions.GetUser(null) );
      }

    });
  }

  login(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  
  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
  
  resetPassword(email: string): Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email).then(resolve => {
      // TODO: resolve() ???;
    });
  }

  register(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  getUsers(): Observable<User[]> {
    return this.afs.collection<User>(USERS).valueChanges();
  }
  
  // TODO: ??????
  setUser(user: User): void {
    // this.afs.doc(USERS + user.id).update(user);
    // this.afs.collection(USERS)
    console.log(user);
    this.afs.collection<User>(USERS).add(user);
  }

}