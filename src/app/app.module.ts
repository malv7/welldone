import { NgModule } from '@angular/core';

// features
import { TasksModule } from './tasks/tasks.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TasksEffects } from './tasks/state/tasks.effects';
import { reducers } from './reducers';
import { UserModule } from './user/user.module';
import { BoardEffects } from './board/state/board.effects';
import { BoardModule } from './board/board.module';

// flex
import { FlexLayoutModule } from '@angular/flex-layout';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule, // flex
    
    // ngrx
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ TasksEffects, BoardEffects ]),
    StoreDevtoolsModule.instrument(), 
    
    // firebase
    AngularFireModule.initializeApp(firebaseConfig, 'welldone'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
    TasksModule,
    UserModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
