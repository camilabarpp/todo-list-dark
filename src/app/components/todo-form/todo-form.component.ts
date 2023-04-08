import {Component} from '@angular/core';
import {TaskService} from "../../integration/service/task.service";
import {filter, map, Observable, Subscription} from "rxjs";
import {Task} from "../../integration/service/task-model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  private _id!: number;
  task$?: Observable<Task[] | undefined>;
  subs: Subscription[] = [];
  initialFormValues!: any;
  taskId!: string;

  form = this.fb.group({
    taskId: new FormControl(),
    taskTitle: new FormControl(
      {value: '', disabled: false},
      {validators: [Validators.required]}
    ),
    description: new FormControl(),
    dueDate: new FormControl(
      {value: new Date(), disabled: false},
      {validators: [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]}
    ),
    completed: new FormControl(),
    category: new FormControl(
      {value: {categoryId: 0, categoryName: ''}, disabled: false},
      {validators: [Validators.required]}
    )
  });

  constructor(
    private fb: FormBuilder,
    private _taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.task$ = this._taskService.getTasks();
    this.task$.subscribe((data: any) => {
      console.log(data);
    });
    this.taskId = this.route.snapshot.params['id'];
    this.initializeValues();
  }

  initializeValues(): void {
    this.subs.push(
      this._taskService
        .getTaskById(this.taskId)
        .pipe(
          filter((value) => !!value),
          map((value) => value as Task),
        )
        .subscribe((value) => {
          if (!!value.taskId) {
            this.form.controls.taskId.setValue(value.taskId, {emitEvent: false});
          }
          if (!!value.taskTitle) {
            this.form.controls.description.setValue(value.taskTitle,
              {emitEvent: false}
            );
          }
          if (!!value.description) {
            this.form.controls.description.setValue(value.description,
              {emitEvent: false}
            );
          }
          if (!!value.dueDate) {
            this.form.controls.dueDate.setValue(new Date(value.dueDate),
              {emitEvent: false}
            );
          }
          if (!!value.category) {
            this.form.controls.category.setValue(value.category)
          }
          if (value.completed) {
            this.form.controls.completed.setValue(value.completed)
          }
          this.initialFormValues = this.form.value;
        })
    );
  }

  onSubmit() {
    console.log(this.form);
  }
}
