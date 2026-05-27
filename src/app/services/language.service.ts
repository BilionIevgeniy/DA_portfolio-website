import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  isTranslating = signal<boolean>(true);
  private translate = inject(TranslateService);
  currentLang = signal<string>(this.translate.currentLang || 'en');

  setLanguage(lang?: string): void {
    const browserLang = this.translate.getBrowserLang();
    const savedLang = localStorage.getItem('lang');
    const finalLang =
      lang || savedLang || (browserLang && ['en', 'de'].includes(browserLang) ? browserLang : 'en');
    this.isTranslating.set(true);
    this.translate.use(finalLang).subscribe({
      next: () => {
        this.isTranslating.set(false);
        this.currentLang.set(finalLang);
      },
      error: (err) => {
        console.error('❌ Load failed:', err);
        this.isTranslating.set(false);
      },
    });
  }

  show(): void {
    this.isTranslating.set(true);
  }

  hide(): void {
    this.isTranslating.set(false);
  }
}
