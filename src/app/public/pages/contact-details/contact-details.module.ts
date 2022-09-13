import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';
import { EditableInputComponent } from '../../components/editable-input/editable-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactDetailsComponent,
    EditableInputComponent
  ],
  imports: [
    CommonModule,
    ContactDetailsRoutingModule,
    FormsModule
  ]
})
export class ContactDetailsModule { }
