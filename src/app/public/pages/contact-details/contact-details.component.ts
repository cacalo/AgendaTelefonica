import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() editMode:boolean = false;
  fieldsToEdit: string[] = []

  constructor() { }

  ngOnInit(): void {

    
  }

  toggleEdit(field:string){
    if(this.fieldsToEdit.includes(field)){
      
    } else {
      this.fieldsToEdit.push(field)
    }
  }

}
