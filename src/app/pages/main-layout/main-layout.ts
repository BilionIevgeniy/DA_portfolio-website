import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Hero } from '@/app/components/hero/hero';
import { AboutMe } from '@/app/components/about-me/about-me';
import { MySkills } from '@/app/components/my-skills/my-skills';
import { Portfolio } from '@/app/components/portfolio/portfolio';
import { ContactForm } from '@/app/components/contact-form/contact-form';
import { TestimonialsComponent } from '@/app/components/testimonials/testimonials';

@Component({
  selector: 'app-main-layout',
  imports: [
    TranslateModule,
    Hero,
    AboutMe,
    MySkills,
    Portfolio,
    ContactForm,
    TestimonialsComponent,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
