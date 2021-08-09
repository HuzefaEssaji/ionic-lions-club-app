import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterErrorPageRoutingModule } from './register-error-routing.module';

import { RegisterErrorPage } from './register-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterErrorPageRoutingModule
  ],
  declarations: [RegisterErrorPage]
})
export class RegisterErrorPageModule {}
