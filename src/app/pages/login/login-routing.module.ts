import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { nologinGuard } from 'src/app/guard/nologin.guard';

const routes: Routes = [{
  path: '',
  title: 'Login-Tu tienda',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
