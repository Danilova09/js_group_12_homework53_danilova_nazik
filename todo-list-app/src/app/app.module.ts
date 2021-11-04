import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainTodoBlockComponent } from './main-todo-block/main-todo-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTodoBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
