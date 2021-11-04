import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-todo-block',
  templateUrl: './main-todo-block.component.html',
  styleUrls: ['./main-todo-block.component.css']
})
export class MainTodoBlockComponent {
  @Input() task = '';

  tasksTodo = [
    {task: 'read book'},
    {task: 'text friend'},
    {task: 'watch movie'},
  ]

  tasksDone = [
    {task: 'do exercises'},
    {task: 'write a poem'},
  ]

  onSubmit(event: Event) {
    event.preventDefault();
    this.tasksTodo.push({task: this.task});
    this.resetForm();
  }

  resetForm() {
    this.task = '';
  }

  formIsEmpty() {
    return this.task === '';
  }

  onDeleteTaskTodo(index: number) {
    this.tasksTodo.splice(index, 1);
  }

  onDeleteTaskDone(index: number) {
    this.tasksDone.splice(index, 1);
  }

  addTaskDoneFromTodo(index: number) {
    let taskDone = this.tasksTodo.splice(index, 1);
    this.tasksDone.push(taskDone[0]);
  }

  onInputChangeValue(index: number, newTask: Event) {
    const target = <HTMLInputElement>newTask.target;
    this.tasksTodo[index].task = target.value;
  }


}
