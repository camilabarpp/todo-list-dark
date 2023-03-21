import {Component, Input} from '@angular/core';
import {SharedFormDirective} from "./shared-form.directive";
import {SharedFormModel} from "../common/shared-form-model";

@Component({
  selector: 'shared-mat-checkbox',
  templateUrl: './mat-checkbox.component.html',
  styleUrls: ['./mat-checkbox.component.scss']
})
export class MatCheckboxComponent extends SharedFormDirective {
  @Input() keywords: SharedFormModel[] = [];
  @Input() value!: boolean;
  @Input() icon!: boolean;
  @Input() isChecked!: boolean;

  constructor() {
    super();
  }
}
