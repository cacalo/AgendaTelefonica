import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [{
  path: '',
  component: ContactsComponent
},
{
  path: 'contacts/:id',
  loadChildren: ()=> import('../contact-details/contact-details.module').then(m => m.ContactDetailsModule),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
