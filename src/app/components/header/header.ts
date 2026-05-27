import { LanguageService } from '@/app/services/language.service';
import { Component, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private languageService = inject(LanguageService);

  currentLang = this.languageService.currentLang;

  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }
}
