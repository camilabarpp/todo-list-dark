import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCategorySectionComponent } from './todo-category-section.component';

describe('TodoCategorySectionComponent', () => {
  let component: TodoCategorySectionComponent;
  let fixture: ComponentFixture<TodoCategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCategorySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
