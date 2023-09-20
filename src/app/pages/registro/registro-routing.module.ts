import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro.component';
import { nologinGuard } from 'src/app/guard/nologin.guard';

const routes: Routes = [{
  path: '',
  title: 'Login-Tu tienda',
  component: RegistroComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
