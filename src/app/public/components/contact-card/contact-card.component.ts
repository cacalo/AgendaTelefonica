import { Component, Input, OnInit } from '@angular/core';
import { Contact, ContactJsonPlaceholder, defaultContact } from 'src/app/core/interfaces/contacts';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor() { }

  @Input() contact:ContactJsonPlaceholder = {};

  ngOnInit(): void {
  }

}
