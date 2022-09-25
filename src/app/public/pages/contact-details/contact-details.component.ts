import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact, ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  editMode:boolean = false;
  contact: ContactJsonPlaceholder = {};
  subs: Subscription[] = []

  constructor(private ar:ActivatedRoute, private us:UserService) { }

  ngOnInit(): void {
    const sub = this.ar.params.subscribe(params =>{
      if(!params['id']) {
        console.log("Nuevo usuario")
        this.editMode = true;
        return
      };
      this.getUserData(params["id"]);
    })
    this.subs.push(sub)
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  async getUserData(id:number){
    this.contact = await this.us.getUserDetails(id);
  }

  save(){
    this.editMode = false;
    // Guardar datos en la API
    // this.us.editContact(this.contact)
    // Si es usuario nuevo
    // this.us.addContact(this.contact);
  }

}
