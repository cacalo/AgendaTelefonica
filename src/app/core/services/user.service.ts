import { Injectable } from '@angular/core';
import { ContactJsonPlaceholder, defaultContact } from '../interfaces/contacts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUserDetails(id:number):Promise<ContactJsonPlaceholder>{
    console.log("Buscando información sobre el usuario", id)
    return {}
  }

  async getUsers():Promise<ContactJsonPlaceholder[]>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return await data.json();
  }

}
