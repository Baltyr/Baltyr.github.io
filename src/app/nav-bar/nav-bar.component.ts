import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isCollapsed = true;
  activeLink = '';

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.isCollapsed = true;
  }
}
