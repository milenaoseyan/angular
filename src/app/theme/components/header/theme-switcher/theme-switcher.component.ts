// src/app/theme/components/header/theme-switcher/theme-switcher.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {
  currentTheme: string = 'light-theme';

  constructor() {
    // При запуске устанавливаем тему
    this.setTheme(this.currentTheme);
  }

  toggleTheme() {
    console.log('Переключаем тему...');
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.setTheme(this.currentTheme);
    
    // Проверим в консоли
    console.log('Текущая тема:', this.currentTheme);
    console.log('Класс body:', document.body.className);
  }

  private setTheme(theme: string) {
    // Удаляем все классы тем
    document.body.classList.remove('light-theme', 'dark-theme');
    // Добавляем нужный класс
    document.body.classList.add(theme);
  }
}