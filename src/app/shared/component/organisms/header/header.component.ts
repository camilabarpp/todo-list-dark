import {Component, EventEmitter, Input, Output} from '@angular/core';
import {colorTypeModel} from "../../atoms/shared.types";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showSideNav!: boolean;
  @Input() isLoggedIn?: boolean | null = false;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLoginClick: EventEmitter<any> = new EventEmitter();
  @Output() onLogoutClick: EventEmitter<any> = new EventEmitter();
  @Input() color: colorTypeModel = 'primary';

  toggleSideNav() {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }
}
