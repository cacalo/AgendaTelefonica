import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent implements OnInit {

  constructor() { }

  @Input() edit = true;
  @Input() fieldName = '';
  @Input() fieldLabel = '';
  content: string = '';

  ngOnInit(): void {
  }

}
