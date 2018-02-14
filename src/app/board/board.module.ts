import { NgModule } from "@angular/core";
import { BoardService } from "./services/board.service";
import { BoardsComponent } from "./components/boards/boards.component";
import { BoardComponent } from "./components/board/board.component";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import * as fromBoard from './state/board.reducer';
import { EffectsModule } from "@ngrx/effects";
import { SharedModule } from "../shared/shared.module";
import { BoardEffects } from "./state/board.effects";

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forFeature('board', fromBoard.boardReducer),
    EffectsModule.forFeature([BoardEffects]),
    SharedModule
  ],
  declarations: [ BoardComponent, BoardsComponent ],
  exports: [ BoardsComponent ],
  providers: [ BoardService ]
})
export class BoardModule {

}