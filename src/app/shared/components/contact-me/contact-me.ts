import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { finalize } from 'rxjs';
import { ContactService } from '../../../core/services/contact.service';
import { BrandLogo } from '../brand-logo/brand-logo';
import { Footer } from '../../../layout/footer/footer';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';
type ContactField = 'name' | 'email' | 'message' | 'privacyAccepted';

/** Stricter than Validators.email: requires a domain with a TLD (e.g. "a@b.de"). */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe, BrandLogo, Footer],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly status = signal<SubmitStatus>('idle');
  /** Shows all errors after the first submit attempt, even for untouched fields. */
  protected readonly submitted = signal(false);

  protected readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
    privacyAccepted: [false, Validators.requiredTrue],
    website: [''], // honeypot
  });

  showError(field: ContactField): boolean {
    const control = this.contactForm.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.contactForm.invalid || this.status() === 'sending') {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    this.contactService
      .send(this.contactForm.getRawValue())
      .pipe(finalize(() => this.submitted.set(false)))
      .subscribe({
        next: () => {
          this.status.set('success');
          this.contactForm.reset();
        },
        error: () => this.status.set('error'),
      });
  }
}
