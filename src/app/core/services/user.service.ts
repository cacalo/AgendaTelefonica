import { Injectable } from '@angular/core';
import { reduce } from 'rxjs';
import { ContactJsonPlaceholder, defaultContact } from '../interfaces/contacts';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  async getUserDetails(id: number): Promise<ContactJsonPlaceholder> {
    const jsonData = await this.getUsers();
    const user = jsonData.filter((user) => user.id == id);
    return user.length > 0 ? user[0] : {};
  }

  async getUsers(): Promise<ContactJsonPlaceholder[]> {
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
