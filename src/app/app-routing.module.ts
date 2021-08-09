import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'signin-landing-page',
    loadChildren: () => import('./signin-landing-page/signin-landing-page.module').then( m => m.SigninLandingPagePageModule)
  },
  {
    path: 'sign-register-form',
    loadChildren: () => import('./sign-register-form/sign-register-form.module').then( m => m.SignRegisterFormPageModule)
  },
  {
    path: 'register-error',
    loadChildren: () => import('./register-error/register-error.module').then( m => m.RegisterErrorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
