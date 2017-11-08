import { NgModule } from "@angular/core";
import { BoardService } from "./services/board.service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BoardsComponent } from "./components/boards/boards.component";
import { BoardComponent } from "./components/board/board.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule, // flex
    RouterModule
  ],
  declarations: [ BoardComponent, BoardsComponent ],
  exports: [ BoardsComponent ],
  providers: [ BoardService ]
})
export class BoardModule {

}