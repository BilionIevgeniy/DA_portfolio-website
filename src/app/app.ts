import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';
import { MySkills } from './components/my-skills/my-skills';
import { Portfolio } from './components/portfolio/portfolio';
import { Reviews } from './components/reviews/reviews';
import { ContactForm } from './components/contact-form/contact-form';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    Hero,
    AboutMe,
    MySkills,
    Portfolio,
    Reviews,
    ContactForm,
    Header,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio-website');
}
