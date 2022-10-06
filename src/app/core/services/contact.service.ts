import { Injectable } from '@angular/core';
import { ContactJsonPlaceholder } from '../interfaces/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  async getContactDetails(id: number): Promise<ContactJsonPlaceholder> {
    const jsonData = await this.getContacts();
    const contact = jsonData.filter((contact) => contact.id == id);
    return contact.length > 0 ? contact[0] : {};
  }

  async getContacts(): Promise<ContactJsonPlaceholder[]> {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return await data.json();
  }

  async editContact(contact: ContactJsonPlaceholder) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async addContact(contact: ContactJsonPlaceholder){
    console.log('Enviando edit de usuario a la api');
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }
}
