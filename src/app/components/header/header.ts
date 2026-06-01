import { LanguageService } from '@/app/services/language.service';
import { Component, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private languageService = inject(LanguageService);
  isMenuOpen = signal<boolean>(false);
  currentLang = this.languageService.currentLang;

  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
