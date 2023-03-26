import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TodoComponent} from "./todo.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";

const routes = [
  {
    path: '',
    component: TodoComponent,
  },
  // {
  //   path: 'edit/:id',
  //   component: TodoFormComponent,
  // },
  {
    path: 'add',
    component: TodoFormComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {
}
