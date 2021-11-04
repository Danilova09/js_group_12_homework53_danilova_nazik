import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTodoBlockComponent } from './main-todo-block.component';

describe('MainTodoBlockComponent', () => {
  let component: MainTodoBlockComponent;
  let fixture: ComponentFixture<MainTodoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTodoBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTodoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
