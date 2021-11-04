import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainTodoBlockComponent } from './main-todo-block/main-todo-block.component';
import {FormsModule} from "@angular/forms";
import { TaskTodoComponent } from './task-todo/task-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTodoBlockComponent,
    TaskTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
