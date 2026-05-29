import { RouterOutlet } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '@/app/services/language.service';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private languageService = inject(LanguageService);
  isTranslating = this.languageService.isTranslating;

  ngOnInit(): void {
    this.languageService.setLanguage();
  }
}
