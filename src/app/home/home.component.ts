import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToContact(): void {
    let el = document.getElementById('contact');
    el.scrollIntoView({ behavior: "smooth" });
  }

}
