import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);
  mailTest = true;
  currentEndPoint: string = '';
  isPrivacyPolicy: string = '';


  contactData = {
    name: '',
    email: '',
    message: '',
  };

  // mailTest: boolean = true;
  isChecked: boolean = false;
  showErrorCheckbox: boolean = false;
  isSubmitted: boolean = false;

  constructor(private router: Router) {
    this.currentUrl();
  }

  post = {
    endPoint: 'https://mevlida-salendrkovic.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  private currentUrl(): void {
    const url = window.location.href;
    if (url.includes('en-US')) {
      this.currentEndPoint = 'https://mevlida-salendrkovic.de/en-US/';
    } else if (url.includes('de-DE')) {
      this.currentEndPoint = 'https://mevlida-salendrkovic.de/de-DE/';
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  public handleCheckbox(): void {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showErrorCheckbox = false;
    }
  }

  public showPrivacyPolicy(): void {
    this.router.navigate(['/privacy-policy']);
  }

}

