import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import is from '@angular/common/locales/is';
import { of } from 'rxjs';

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
      text: 'Ievgen demonstrated strong technical capabilities and a genuine dedication to high-quality software. He worked across both backend and frontend with confidence, delivering scalable solutions in Node.js and building clean, responsive interfaces with React. Highly dependable and professional.',
      author: 'Noam Barnea',
      role: 'VP R&D at Leal Health',
      imgSrc: 'images/noam.jpeg',
    },
    {
      text: 'I was part of the team that trained Ievgen, and he came out as the top student from the bootcamp. We later hired him at OSSystem, where his passion and remarkable results were outstanding. He proved to be a fast learner, focused on building sustainable and scalable applications.',
      author: 'Best Rotimi',
      role: 'Senior Full-Stack Engineer',
      imgSrc: 'images/best.jpeg',
    },
    {
      text: "I was consistently impressed by Ievgen's professionalism. He is always open to helping others and fostering a collaborative atmosphere. His code is clean, well-structured, and adheres to best practices. He approaches every task with determination and always finds effective solutions.",
      author: 'Hrach Avagyan',
      role: 'Senior Frontend Engineer',
      imgSrc: 'images/hrach.jpeg',
    },
    {
      text: 'Ievgen is an exceptional developer with impeccable attention to detail. He consistently demonstrates a solution-oriented approach to every challenge, focusing on high-quality results. His proactive communication and positive attitude make him a truly valuable asset to any team.',
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
