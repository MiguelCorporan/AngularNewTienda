import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { estaloginGuard } from 'src/app/guard/estalogin.guard';

const routes: Routes = [
  {
    path: '',
    title: 'User-Tu tienda',
    canActivate: [estaloginGuard],
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
