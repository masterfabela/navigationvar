import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
    './menu.component.css'
  ]
})

export class MenuComponent{
  isMenuOpen = true;
  contentMargin = 240;

  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen
    if (this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
}