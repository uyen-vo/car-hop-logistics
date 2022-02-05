import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'chl-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() control: FormControl;
  @Input() errorMessage: string;
  @Input() isNumberField: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
