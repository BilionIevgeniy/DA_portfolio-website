import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMailData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class MailApiService {
  private http = inject(HttpClient);
  private apiUrl = 'https://my-nest-backend-vrot.onrender.com/mail/contact';

  sendContactMail(data: ContactMailData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
