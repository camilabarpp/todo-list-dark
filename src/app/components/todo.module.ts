import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from "./todo.component";
import {TodoRoutingModule} from "./todo-routing.module";
import {SharedModule} from "../shared/shared.module";
import { TodoBodyComponent } from './todo-body/todo-body.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoBodyComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
  ]
})
export class TodoModule {
}
