import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent {
  @Input()  task = '';
  @Output() delete = new EventEmitter();

  onTaskDoneDelete() {
    this.delete.emit();
  }
}
