import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData:ContactJsonPlaceholder[] = [];

  constructor(private cs:ContactService, private auth:AuthService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    this.contactsData = await this.cs.getContacts();
  }

  logOut(){
    this.auth.resetSession();
  }

}
