import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-task',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewTaskComponent {

  @Output() addTask = new EventEmitter();

  form = new FormGroup({ text: new FormControl('', [Validators.required]) });

  add(): void {
    this.addTask.emit(this.form.get('text').value);
  }

}
