import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Hero } from '@/app/components/hero/hero';
import { AboutMe } from '@/app/components/about-me/about-me';
import { MySkills } from '@/app/components/my-skills/my-skills';
import { Portfolio } from '@/app/components/portfolio/portfolio';
import { ContactForm } from '@/app/components/contact-form/contact-form';
import { Header } from '@/app/components/header/header';
import { TestimonialsComponent } from '@/app/components/testimonials/testimonials';
import { Footer } from '@/app/components/footer/footer';
import { LanguageService } from '@/app/services/language.service';

@Component({
  selector: 'app-main-layout',
  imports: [
    TranslateModule,
    Hero,
    AboutMe,
    MySkills,
    Portfolio,
    ContactForm,
    Header,
    TestimonialsComponent,
    Footer,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout implements OnInit {
  private languageService = inject(LanguageService);
  isTranslating = this.languageService.isTranslating;

  ngOnInit(): void {
    this.languageService.setLanguage();
  }
}
