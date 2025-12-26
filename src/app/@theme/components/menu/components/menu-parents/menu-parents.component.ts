// src/app/@theme/components/menu/components/menu-parents/menu-parents.component.ts
import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-menu-parents',
  templateUrl: './menu-parents.component.html',
  styleUrls: ['./menu-parents.component.css']
})
export class MenuParentsComponent {
  menuParentItems: MenuItem[] = [];

  constructor(private menuService: MenuService) {
    this.menuParentItems = this.menuService.getParentItems();
  }

  onSelectItem(event: Event, item: MenuItem) {
    event.preventDefault();
    this.menuService.setCurrentItem(item);
  }
}
