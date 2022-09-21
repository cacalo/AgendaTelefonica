import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details.component';

const routes: Routes = [{
  path: 'new',
  component: ContactDetailsComponent
},{
  path: ':id',
  component: ContactDetailsComponent
}
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactDetailsRoutingModule { }
