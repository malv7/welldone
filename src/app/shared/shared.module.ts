import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [ CommonModule, FlexLayoutModule, ReactiveFormsModule ],
  exports: [ CommonModule, FlexLayoutModule, ReactiveFormsModule ]
})
export class SharedModule { }