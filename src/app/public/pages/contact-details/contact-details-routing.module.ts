import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details.component';

const routes: Routes = [
  {
    path: 'new',
    component: ContactDetailsComponent,
  },
  {
    path: ':id',
    component: ContactDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactDetailsRoutingModule {}
