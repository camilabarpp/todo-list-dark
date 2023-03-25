import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSidenavComponent } from './todo-sidenav.component';

describe('TodoSectionComponent', () => {
  let component: TodoSidenavComponent;
  let fixture: ComponentFixture<TodoSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
