import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AllComponent } from './components/all/all.component';
import { StoreComponent } from './pages/store/store.component';
// import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CarrouserComponent } from './components/carrouser/carrouser.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
// import { RegistroComponent } from './pages/registro/registro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './components/tercero/tercero.component';
import { CuartoComponent } from './components/cuarto/cuarto.component';
import { GarantiasComponent } from './components/garantias/garantias.component';
import { FallaComponent } from './pages/falla/falla.component';
import { DetalleproductComponent } from './pages/detalleproduct/detalleproduct.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CheckComponent } from './components/check/check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AllComponent,
    StoreComponent,
    // LoginComponent,
    CartComponent,
    CarrouserComponent,
    ProductosComponent,
    // RegistroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    GarantiasComponent,
    FallaComponent,
    DetalleproductComponent,
    FooterComponent,
    LoaderComponent,
    CheckComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
