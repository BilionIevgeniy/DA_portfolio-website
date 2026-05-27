import { Component, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);

  currentLang = signal<string>(this.translate.currentLang || 'en');

  switchLanguage(lang: string): void {
    this.translate.use(lang).subscribe(() => {
      this.currentLang.set(lang);
      localStorage.setItem('lang', lang);
    });
  }
}
