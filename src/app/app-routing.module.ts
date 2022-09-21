import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUserGuard } from './core/guards/logged-user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./public/pages/contacts/contacts.module').then(m => m.ContactsModule),
    canActivate: [LoggedUserGuard]
  },
  {
    path: 'login',
    loadChildren: ()=> import('./public/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'contacts',
    loadChildren: ()=> import('./public/pages/contact-details/contact-details.module').then(m => m.ContactDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
