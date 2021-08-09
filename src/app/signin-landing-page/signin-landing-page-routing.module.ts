import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninLandingPagePage } from './signin-landing-page.page';

const routes: Routes = [
  {
    path: '',
    component: SigninLandingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninLandingPagePageRoutingModule {}
