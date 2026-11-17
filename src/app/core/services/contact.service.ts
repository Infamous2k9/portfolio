import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CONTACT_ENDPOINT } from '../config/contact.config';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
  /** Honeypot field: humans never see it, bots fill it. */
  website: string;
}

interface ContactResponse {
  success: boolean;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(message: ContactMessage): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(CONTACT_ENDPOINT, message);
  }
}
