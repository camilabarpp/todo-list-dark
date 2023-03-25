import {Component, Input} from '@angular/core';
import {SharedFormDirective} from "../mat-checkbox/shared-form.directive";

@Component({
  selector: 'shared-input',
  templateUrl: './shared-form-field-input.component.html',
  styleUrls: ['./shared-form-field-input.component.scss']
})
export class SharedFormFieldInputComponent extends SharedFormDirective  {

  @Input() placeholder: string = '';
  @Input() icon?: string;
  @Input() mask: string = '';

  constructor() {
    super();
  }
}
