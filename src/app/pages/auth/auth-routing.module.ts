import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTemplateComponent } from './auth-template/auth-template.component';
import { LoginComponent } from './login/login.component';
import { LoginOtpComponent } from './login-otp/login-otp.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'login-otp',
        component: LoginOtpComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
