import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TodoComponent} from "./todo.component";

const routes = [
  {
    path: '',
    component: TodoComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {
}
