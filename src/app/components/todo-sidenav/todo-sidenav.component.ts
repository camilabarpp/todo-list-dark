import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'todo-sidenav',
  templateUrl: './todo-sidenav.component.html',
  styleUrls: ['./todo-sidenav.component.scss']
})
export class TodoSidenavComponent {
  @Input() showSideNav!: boolean;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();

  toggleSideNav(): void {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }
}
