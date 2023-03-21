import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SharedDefaultComponentDirective} from "../../shared-default-component.directive";
import {SharedFormModel} from "../common/shared-form-model";

@Directive({
  selector: '[appSharedForm]'
})
export class SharedFormDirective extends SharedDefaultComponentDirective{
  @Input() parentForm: FormControl | undefined;
  @Output() outputValue = new EventEmitter<any | SharedFormModel>();
}
