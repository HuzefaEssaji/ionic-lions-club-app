import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignRegisterFormPage } from './sign-register-form.page';

const routes: Routes = [
  {
    path: '',
    component: SignRegisterFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignRegisterFormPageRoutingModule {}
