import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);
  sendWasTouched: boolean = false;
  privacyPolicyChecked: boolean = false;


  inputData = {
    name: '',
    email: '',
    message: '',
  };


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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.inputData))
        .subscribe({
          next: (response) => {
            this.sendWasTouched = true;
            setTimeout(() => {
              this.sendWasTouched = false;
            }, 2000);
            ngForm.resetForm();
            this.privacyPolicyChecked = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  togglePrivacyPolicy() {
    if (this.privacyPolicyChecked) {
      this.privacyPolicyChecked = false;
    } else {
      this.privacyPolicyChecked = true;
    }
  }
}

