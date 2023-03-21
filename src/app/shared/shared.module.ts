import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './component/organisms/header/header.component';
import {MatCheckboxComponent} from './component/atoms/shared-form/mat-checkbox/mat-checkbox.component';
import {SharedFormDirective} from "./component/atoms/shared-form/mat-checkbox/shared-form.directive";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { SharedLabelComponent } from './component/atoms/shared-form/shared-label/shared-label.component';
import {SortCompletedPipe} from "./component/atoms/shared-form/shared-label/pipe/sort-completed.pipe";

@NgModule({
  declarations: [
    HeaderComponent,
    MatCheckboxComponent,
    SharedFormDirective,
    SharedLabelComponent,
    SortCompletedPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    MatCheckboxComponent,
    SharedLabelComponent,
  ]
})
export class SharedModule {
}
