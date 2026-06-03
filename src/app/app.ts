import { RouterOutlet } from '@angular/router';
import { Component, inject, OnInit, afterNextRender } from '@angular/core';
import { LanguageService } from '@/app/services/language.service';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private languageService = inject(LanguageService);
  isTranslating = this.languageService.isTranslating;

  constructor() {
    afterNextRender(() => {
      AOS.init({
        duration: 700,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic',
      });
    });
  }

  ngOnInit(): void {
    this.languageService.setLanguage();
  }
}
