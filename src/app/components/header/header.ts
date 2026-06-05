import { LanguageService } from '@/app/services/language.service';
import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private languageService = inject(LanguageService);
  private router = inject(Router);
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

  scrollToAbout(event: Event): void {
    event.preventDefault();
    this.closeMenu();

    const doScroll = () => {
      const el = document.getElementById('about');
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    if (document.getElementById('about')) {
      doScroll();
    } else {
      this.router.navigate(['/']).then(() => setTimeout(doScroll, 100));
    }
  }
}
