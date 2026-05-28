import { Component, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactMailData, MailApiService } from '@/app/services/mail-api.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  standalone: true,
})
export class ContactForm {
  private fb = inject(FormBuilder);
  private mailApiService = inject(MailApiService);

  isLoading = signal<boolean>(false);
  toastState = signal<{ show: boolean; type: 'success' | 'error'; message: string }>({
    show: false,
    type: 'success',
    message: '',
  });

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, [Validators.requiredTrue]],
  });

  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control && control.touched && control.invalid);
  }

  isFieldValidSuccess(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control && control.touched && control.valid);
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      if (this.contactForm.get('privacy')?.invalid) {
        this.showToast('error', 'Please accept the privacy policy.');
      }
      return;
    }

    this.isLoading.set(true);

    const mailData: ContactMailData = {
      name: this.contactForm.value.name ?? '',
      email: this.contactForm.value.email ?? '',
      message: this.contactForm.value.message ?? '',
    };

    this.mailApiService.sendContactMail(mailData).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.showToast('success', 'Your message has been sent successfully!');
        this.contactForm.reset({
          name: '',
          email: '',
          message: '',
          privacy: false,
        });
      },
      error: (err: unknown) => {
        console.error('Email sending failed:', err);
        this.isLoading.set(false);
        this.showToast('error', 'Failed to send message. Please try again later.');
      },
    });
  }

  private showToast(type: 'success' | 'error', message: string): void {
    this.toastState.set({ show: true, type, message });
    setTimeout(() => {
      this.toastState.set({ show: false, type, message: '' });
    }, 5000);
  }
}
