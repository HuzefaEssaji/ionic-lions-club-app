import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-register-form',
  templateUrl: './sign-register-form.page.html',
  styleUrls: ['./sign-register-form.page.scss'],
})
export class SignRegisterFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form_submitted=false;
  input_text1="";
  input_text2="";
  input_text3="";
  input_text4="";
  input_text5="";
  input_text6="";
  btnclicked(){
    this.form_submitted = true;
    console.log('btn clicked')
  }
}
