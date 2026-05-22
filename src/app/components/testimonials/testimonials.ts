import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  imgSrc: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class TestimonialsComponent {
  currentSlide = signal<number>(0);

  testimonials: Testimonial[] = [
    {
      text: "Ievgen really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      author: 'V. Schuster',
      role: 'Team Partner',
      imgSrc: 'images/review-avatar-1.png',
    },
    {
      text: 'Working with this developer was an absolute pleasure. His ability to build modular, clean Angular architectures drastically improved our production speed.',
      author: 'M. Weber',
      role: 'Project Manager',
      imgSrc: 'images/review-avatar-2.png',
    },
    {
      text: "Great problem-solving skills and persistent mindset. He deeply analyzes every task and doesn't stop until finding the most elegant and optimized code solution.",
      author: 'A. Schmidt',
      role: 'Senior Frontend Engineer',
      imgSrc: 'images/review-avatar-3.png',
    },
    {
      text: 'Exceptional UI/UX implementation. He converted our Figma designs into pixel-perfect responsive templates down to the exact spacing and neon glow effects.',
      author: 'S. Fischer',
      role: 'UI/UX Designer',
      imgSrc: 'images/review-avatar-4.png',
    },
    {
      text: 'Highly reliable developer with excellent technical competence in modern TypeScript and SCSS. A great asset to any agile Scrum development team.',
      author: 'T. Wagner',
      role: 'Scrum Master',
      imgSrc: 'images/review-avatar-5.png',
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
