import {Component, Input} from '@angular/core';
import {DateHelper} from "src/app/common/date-helper";
import {SharedFormDirective} from "../mat-checkbox/shared-form.directive";

@Component({
  selector: 'shared-form-field-date',
  templateUrl: './shared-form-field-date.component.html',
  styleUrls: ['./shared-form-field-date.component.scss'],
})
export class SharedFormFieldDateComponent extends SharedFormDirective {

  @Input() placeholder: string = 'dd/mm/yyyy';
  @Input() minDate = DateHelper.subtractDays(180, new Date());
  @Input() maxDate? = new Date();

  constructor() {
    super();
  }
}
