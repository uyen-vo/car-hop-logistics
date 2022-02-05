import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'chl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() control: FormControl;
  @Input() errorMessage: string;
  @Input() phoneMask: boolean;
  @Input() isNumberField: boolean;
  @Input() hasPatternValidator: boolean;

  @HostListener("focusout", ["$event.target"])
  onBlur(e) {
    if (this.isNumberField) {
      if (e.value < 0) e.value = 1
    }
  }

  @HostListener("keypress", ["$event.target"])
  onKeypress(e) {
    if (this.isNumberField) {
      if (e.value < 0) e.value = 1
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
