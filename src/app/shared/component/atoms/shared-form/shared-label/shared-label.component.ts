import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedDefaultComponentDirective} from "../../shared-default-component.directive";
import {FormControl} from "@angular/forms";
import {SharedFormModel} from "../common/shared-form-model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'shared-label',
  templateUrl: './shared-label.component.html',
  styleUrls: ['./shared-label.component.scss']
})
export class SharedLabelComponent extends SharedDefaultComponentDirective {
  hoverIndex: number | undefined;
  @Input() parentForm: FormControl | undefined;
  @Input() keywords: SharedFormModel[] = [];
  @Output() outputValue = new EventEmitter<any | SharedFormModel>();
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() selected = new EventEmitter(false);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
  }

  onEdit(taskId: number) {
    this.router.navigate(['edit', taskId], {relativeTo: this.route}).then(r => console.log(r));
  }

  onDelete(taskModel: any) {
    this.remove.emit(taskModel);
  }

  onSelected(taskModel: any) {
    this.selected.emit(taskModel);
  }

  public enter(i : number) {
    this.hoverIndex = i;
  }

  public leave() {
    this.hoverIndex = undefined;
  }
}
