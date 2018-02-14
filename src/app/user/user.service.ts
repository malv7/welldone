import { Injectable } from '@angular/core';

// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from './../reducers';
import * as UserActions from './state/user.actions';

// data, configs, ...
import { USERS } from '../state/collections';
import { User } from '../tasks/models';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

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
        store.dispatch(new UserActions.SetUser({ user: _user }));
      } else {
        store.dispatch(new UserActions.SetUser(null));
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

  setUser(user: User): void {

    const doc = this.afs.doc(USERS + user.id);
    doc.valueChanges().take(1).subscribe(resolvedUser => {
      if (!resolvedUser) {
        doc.set(user);
      } else {
        doc.update(user);
      }
    });

  }

  deleteUser(id: string): void {
    this.afs.doc(USERS + id).delete();
  }

  deleteAllUsers(): void {
    this.afs.collection<User>(USERS).valueChanges().take(1).subscribe(users => {
      users.forEach(user => this.deleteUser(user.id));
    });
  }

}