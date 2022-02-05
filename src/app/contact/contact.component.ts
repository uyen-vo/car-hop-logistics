import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'chls-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    numVehicles: new FormControl('', Validators.required),
    weight: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() { }

  onSubmit(): void {
    console.log(this.contactForm)
  }
}
