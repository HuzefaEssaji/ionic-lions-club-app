import { Component, OnInit } from '@angular/core';
// import { trigger, state, style, animate, transition } from '@angular/animations';
// import { createAnimation } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  
})
  
  
export class AboutPage implements OnInit {
  
  animate = ''
  hide=''
  constructor(private animationCtrl: AnimationController) {
   
  }
  
  transform(){
  this.animate='trans180';
  this.hide='opacity0'
  var myElementRef = document.querySelectorAll('.content')
  const animation: Animation = this.animationCtrl.create()
    .addElement(myElementRef)
    .duration(1000)
    .fromTo('background-color', 'black', 'red');
    animation.play()
 
}
  transformBack(){
    this.animate='trans0'
  }
  transform2(){
    this.animate='trans90';
    this.hide='opacity1';
  }
  ngOnInit() {
   
  }
  
 

 
}
