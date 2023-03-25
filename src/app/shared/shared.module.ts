import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './component/organisms/header/header.component';
import {MatCheckboxComponent} from './component/atoms/shared-form/mat-checkbox/mat-checkbox.component';
import {SharedFormDirective} from "./component/atoms/shared-form/mat-checkbox/shared-form.directive";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { SharedLabelComponent } from './component/atoms/shared-form/shared-label/shared-label.component';
import {SortCompletedPipe} from "./component/atoms/shared-form/shared-label/pipe/sort-completed.pipe";
import {SharedButtonComponent} from "./component/atoms/shared-button/shared-button.component";
import {SharedDefaultComponentDirective} from "./component/atoms/shared-default-component.directive";
import {
  SharedFormFieldInputComponent
} from "./component/atoms/shared-form/shared-input/shared-form-field-input.component";

@NgModule({
  declarations: [
    HeaderComponent,
    MatCheckboxComponent,
    SharedFormDirective,
    SharedLabelComponent,
    SortCompletedPipe,
    SharedButtonComponent,
    SharedDefaultComponentDirective,
    SharedFormFieldInputComponent
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
    SharedButtonComponent,
    SharedFormFieldInputComponent,
  ]
})
export class SharedModule {
}
