import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private langService = inject(LanguageService);
  private windowWidth = signal(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.windowWidth.set(window.innerWidth);
  }

  verticalTextSize = computed(() => {
    const width = this.windowWidth();
    const lang = this.langService.currentLang();

    let size: number;
    if (width <= 768) {
      size = 22;
      return lang === 'de' ? Math.round(size * 0.6) : size;
    } else if (width <= 1260) {
      size = 38;
    } else if (width <= 1422) {
      size = 46;
    } else {
      size = 52;
    }

    return lang === 'de' ? Math.round(size * 0.7) : size;
  });
}
