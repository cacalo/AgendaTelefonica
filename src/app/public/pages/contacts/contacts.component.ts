import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { UserService } from 'src/app/core/services/user.service';
import { contactsData } from 'src/assets/mockData/data';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData:ContactJsonPlaceholder[] = [];

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    this.contactsData = await this.us.getUsers();
  }

}
