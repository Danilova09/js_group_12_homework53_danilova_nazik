import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent  {
  @Input() task = '';
  @Output() delete = new EventEmitter();

  onClickDelete() {
    this.delete.emit();
  }

}
