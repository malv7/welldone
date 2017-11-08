import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SectionComponent } from './components/section/section.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskComponent } from './components/task/task.component';
import { NewTaskComponent } from './components/new-task/new.component';

import { TasksService } from './services/tasks.service';
// https://github.com/dzonatan/angular-linky
import { LinkyModule } from 'angular-linky';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    // 3rd
    LinkyModule
  ],
  declarations: [
    SectionComponent,
    TasklistComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  providers: [TasksService]
})
export class TasksModule { }
