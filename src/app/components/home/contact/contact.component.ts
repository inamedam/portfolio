import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  ngOnInit(): void {
  }

  contactForm: FormGroup;

  constructor(public analyticsService: AnalyticsService, private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Submit button clicked');
    if (this.contactForm.valid) {
      // Formspree endpoint
      const formSpreeEndpoint = 'https://formspree.io/f/mkndwqan';
  
      // Send form data to Formspree using HTTP POST
      this.http.post(formSpreeEndpoint, this.contactForm.value).subscribe(
        (response) => {
          console.log('Form submitted successfully!', response);
          alert('Form submitted successfully');
          this.contactForm.reset();
        },
        (error) => {
          console.error('Error submitting form:', error);
          alert('Error submitting form. Please try again later.');
        }
      );
    }
  }
  
  
}
