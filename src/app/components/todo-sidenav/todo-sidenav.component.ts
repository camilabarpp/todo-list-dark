import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'todo-sidenav',
  templateUrl: './todo-sidenav.component.html',
  styleUrls: ['./todo-sidenav.component.scss']
})
export class TodoSidenavComponent {
  @Input() showSideNav!: boolean;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();
  @Output() monthlyTasksSelected = new EventEmitter();
  @Output() weeklyTasksSelected = new EventEmitter();
  @Output() dailyTasksSelected = new EventEmitter();

  toggleSideNav(): void {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }

  onMonthlyTasksClick() {
    this.monthlyTasksSelected.emit();
  }

  onWeeklyTasksClick() {
    this.weeklyTasksSelected.emit();
  }

  onDailyTasksClick() {
    this.dailyTasksSelected.emit();
  }
}
