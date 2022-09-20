import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { contactsData } from 'src/assets/mockData/data';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData:ContactJsonPlaceholder[] = [];

  constructor() { }


  ngOnInit(): void {
    this.getData()
  }
  
  async getData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataJson = await data.json();
    this.contactsData = dataJson;
  }


}
