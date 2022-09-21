import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserDetails(id:number){

  }

  async getUsers(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return await data.json();
  }

}
