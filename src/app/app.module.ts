import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// features
import { TasksModule } from './tasks/tasks.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TasksEffects } from './tasks/state/tasks.effects';
import { BoardEffects } from './board/state/board.effects';
import { UserEffects } from './user/state/user.effects';
import { reducers } from './reducers';

// flex
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { XyComponent } from './xy.component';

const firebaseConfig = {
  apiKey: "AIzaSyDllo8VSuixnDLrBdwrRLF0k1QCPQLFIFQ",
  authDomain: "welldone-63f19.firebaseapp.com",
  databaseURL: "https://welldone-63f19.firebaseio.com",
  projectId: "welldone-63f19",
  storageBucket: "welldone-63f19.appspot.com",
  messagingSenderId: "246290475166"
}

@NgModule({
  declarations: [
    AppComponent,
    XyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // ngrx
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      TasksEffects,
      UserEffects
    ]),
    StoreDevtoolsModule.instrument(), 
    
    // firebase
    AngularFireModule.initializeApp(firebaseConfig, 'welldone'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
    TasksModule,
    UserModule,
    BoardModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
