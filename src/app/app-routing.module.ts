import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { StoreComponent } from './pages/store/store.component';
import { FallaComponent } from './pages/falla/falla.component';
import { estaloginGuard } from './guard/estalogin.guard';
import { nologinGuard } from './guard/nologin.guard';
import { DetalleproductComponent } from './pages/detalleproduct/detalleproduct.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home-Tu tienda',
    component: HomeComponent
  },
  {
    path: 'login',
    canActivate: [nologinGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    canActivate: [nologinGuard],
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'store',
    title: 'productos-Tu tienda',
    component: StoreComponent
  },
  {
    path: 'store/:detalle',
    title: 'productos-Tu tienda',
    component: DetalleproductComponent
  },
  {
    path: '**',
    title: '404-Tu tienda',
    component: FallaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
