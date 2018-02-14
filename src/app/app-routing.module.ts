import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './board/components/boards/boards.component';
import { BoardComponent } from './board/components/board/board.component';
import { XyComponent } from './xy.component';

const routes: Routes = [
  {
    path: 'board/:id',
    component: BoardComponent
  },
  {
    path: 'xy',
    component: XyComponent
  },
  {
    path: '',
    redirectTo: 'xy',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
