import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninLandingPagePageRoutingModule } from './signin-landing-page-routing.module';

import { SigninLandingPagePage } from './signin-landing-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninLandingPagePageRoutingModule
  ],
  declarations: [SigninLandingPagePage]
})
export class SigninLandingPagePageModule {}
