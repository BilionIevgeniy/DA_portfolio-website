import { LanguageService } from '@/app/services/language.service';
import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  imports: [TranslateModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {
  private langService = inject(LanguageService);
  private windowWidth = signal(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.windowWidth.set(window.innerWidth);
  }

  skillsTitleSize = computed(() => {
    const width = this.windowWidth();
    const lang = this.langService.currentLang();

    let size: number;
    if (width <= 768) {
      size = 48;
    } else if (width <= 1270) {
      size = 64;
    } else {
      size = 90;
    }

    return lang === 'de' ? Math.round(size * 0.6) : size;
  });
}
