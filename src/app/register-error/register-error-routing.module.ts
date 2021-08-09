import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterErrorPage } from './register-error.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterErrorPageRoutingModule {}
