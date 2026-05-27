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
  protected readonly title = signal('portfolio-website');
  private translate = inject(TranslateService);
  isLoading = signal(true);

  ngOnInit(): void {
    const browserLang = this.translate.getBrowserLang();
    const savedLang = localStorage.getItem('lang');

    const finalLang =
      savedLang || (browserLang && ['en', 'de'].includes(browserLang) ? browserLang : 'en');
    this.translate.use(finalLang).subscribe({
      next: () => {
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('❌ Load failed:', err);
        this.isLoading.set(false);
      },
    });
  }
}
