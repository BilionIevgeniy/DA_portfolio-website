import { Component, signal, computed } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  imgSrc: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class TestimonialsComponent {
  currentSlide = signal<number>(0);

  testimonials: Testimonial[] = [
    {
      text: '{{ "testimonials.noam.text" | translate }}',
      author: 'Noam Barnea',
      role: 'VP R&D at Leal Health',
      imgSrc: 'images/noam.jpeg',
    },
    {
      text: '{{ "testimonials.best.text" | translate }}',
      author: 'Best Rotimi',
      role: 'Senior Full-Stack Engineer',
      imgSrc: 'images/best.jpeg',
    },
    {
      text: '{{ "testimonials.hrach.text" | translate }}',
      author: 'Hrach Avagyan',
      role: 'Senior Frontend Engineer',
      imgSrc: 'images/hrach.jpeg',
    },
    {
      text: '{{ "testimonials.pavel.text" | translate }}',
      author: 'Pavel Kalinichenko',
      role: 'Senior Full-Stack Engineer | DevOps',
      imgSrc: 'images/pavel.jpeg',
    },
  ];

  activeTestimonial = computed(() => this.testimonials[this.currentSlide()]);

  nextSlide(): void {
    const nextIndex = (this.currentSlide() + 1) % this.testimonials.length;
    this.currentSlide.set(nextIndex);
  }

  prevSlide(): void {
    const prevIndex =
      this.currentSlide() === 0 ? this.testimonials.length - 1 : this.currentSlide() - 1;
    this.currentSlide.set(prevIndex);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }
}
