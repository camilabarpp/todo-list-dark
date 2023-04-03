import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from "./todo.component";
import {TodoRoutingModule} from "./todo-routing.module";
import {SharedModule} from "../shared/shared.module";
import {TodoFormComponent} from './todo-form/todo-form.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MaterialModule} from "../material/material.module";
import {TodoCategorySectionComponent} from './todo-category-section/todo-category-section.component';
import {TodoSidenavComponent} from './todo-sidenav/todo-sidenav.component';
import {
  SharedFormFieldDateComponent
} from "../shared/component/atoms/shared-form/shared-form-field-date/shared-form-field-date.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoCategorySectionComponent,
    TodoSidenavComponent,
    SharedFormFieldDateComponent
  ],
  exports: [
    TodoSidenavComponent,
    TodoCategorySectionComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    MatSidenavModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class TodoModule {
}
