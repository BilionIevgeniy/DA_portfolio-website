import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';
import { MySkills } from './components/my-skills/my-skills';
import { Portfolio } from './components/portfolio/portfolio';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactForm } from './components/contact-form/contact-form';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { LanguageService } from '@/app/services/language.service';

@Component({
  selector: 'app-root',
  imports: [
    TranslateModule,
    // RouterOutlet,
    Hero,
    AboutMe,
    MySkills,
    Portfolio,
    ContactForm,
    Header,
    TestimonialsComponent,
    Footer,
  ],
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
