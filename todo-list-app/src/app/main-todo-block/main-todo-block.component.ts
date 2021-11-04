import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-todo-block',
  templateUrl: './main-todo-block.component.html',
  styleUrls: ['./main-todo-block.component.css']
})
export class MainTodoBlockComponent  {
  @Input() task = '';

  tasksTodo = [
    {task: 'read book'},
    {task: 'text friend'},
  ]

  tasksDone = [
    {task: 'do exercises'},
  ]

  onSubmit(event: Event) {
    event.preventDefault();
    this.tasksTodo.push({task: this.task});
    this.resetForm();
  }

  resetForm() {
    this.task = '';
  }

  onInputValue(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.task = target.value;
  } /* замена ngModel */

  formIsEmpty() {
    return this.task === '';
  }

  onDeleteTaskDone(index: number) {
    this.tasksTodo.splice(index, 1);
  }

}
