import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
