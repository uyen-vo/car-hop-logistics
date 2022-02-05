import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
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

  constructor(private _titleService: Title) { }

  ngOnInit(): void {
    this._titleService.setTitle("Car Hop Logistics | Ship Cars");
  }

  onSubmit(): void {
    console.log(this.contactForm)
  }
}
