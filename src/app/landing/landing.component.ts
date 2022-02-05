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
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    phone: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
  });

  constructor(private _titleService: Title) { }

  ngOnInit(): void {
    this._titleService.setTitle("Car Hop Logistics | Ship Cars");
  }

  onSubmit(): void {
    console.log(this.contactForm)
  }
}
