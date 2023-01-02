import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'stepper', component: StepperComponent },
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
