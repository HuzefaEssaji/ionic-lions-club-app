import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignRegisterFormPageRoutingModule } from './sign-register-form-routing.module';

import { SignRegisterFormPage } from './sign-register-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignRegisterFormPageRoutingModule
  ],
  declarations: [SignRegisterFormPage]
})
export class SignRegisterFormPageModule {}
