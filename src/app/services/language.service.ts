import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  isTranslating = signal<boolean>(true);
  private translate = inject(TranslateService);
  currentLang = signal<string>(this.translate.currentLang || 'en');

  setLanguage(lang: string): void {
    this.isTranslating.set(true);
    this.translate.use(lang).subscribe({
      next: () => {
        this.isTranslating.set(false);
        this.currentLang.set(lang);
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
