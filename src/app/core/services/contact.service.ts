import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTACT_ENDPOINT } from '../config/contact.config';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
  /** Honeypot field: humans never see it, bots fill it. */
  website: string;
}

/** Response shape of public/sendMail.php */
interface ContactResponse {
  success: boolean;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(message: ContactMessage): Observable<ContactResponse> {
    // Bot filled in the hidden field: pretend success, but never call the mail script.
    if (message.website) {
      return of({ success: true });
    }

    // sendMail.php only reads name, email and message.
    const payload = {
      name: message.name.trim(),
      email: message.email.trim(),
      message: message.message.trim(),
    };
    return this.http.post<ContactResponse>(CONTACT_ENDPOINT, payload);
  }
}
