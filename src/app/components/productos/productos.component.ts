import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApistoreService } from 'src/app/service/apistore.service';
import { CartService } from 'src/app/service/cart.service';
import { OneproductService } from 'src/app/service/oneproduct.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {

  constructor(private prodcutos: ApistoreService, private router: Router, private card: CartService) { }

  private categorySubscription!: Subscription;
  private producto!: Subscription;



  public Data: any = []
  public FiltroDatos: any = []
  public Categorias: any = []
  public selectedValue = ""

  change = true

  ngOnInit(): void {

    this.producto = this.prodcutos.apiAllProduct()
      .subscribe(res => {
        this.Data = res
        this.FiltroDatos = [...this.Data];
        this.change = false
      })

    this.categorySubscription = this.prodcutos.Category().subscribe(
      res => {
        this.Categorias = res
        console.log(res);
      }
    )

  }

  ngOnDestroy(): void {
    if (this.producto) {
      this.producto.unsubscribe();
    }

    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe()
    }
  }

  addToCart(dato: any) {
    this.card.AddCard(dato)
  }

  Seleccion() {
    console.log(this.selectedValue);

    if (this.selectedValue === "electronics") {
      this.FiltroDatos = this.Data.filter((result: any) => result.category === this.selectedValue);

    } else if (this.selectedValue === "men's clothing") {
      this.FiltroDatos = this.Data.filter((result: any) => result.category === this.selectedValue);

    } else if (this.selectedValue === "women's clothing") {
      this.FiltroDatos = this.Data.filter((result: any) => result.category === this.selectedValue);
    } else if (this.selectedValue === "jewelery") {
      this.FiltroDatos = this.Data.filter((result: any) => result.category === this.selectedValue);

    } else {
      this.FiltroDatos = [...this.Data];

    }

  }

  Detalle(date: any, event: Event) {
    event.stopPropagation()

    this.router.navigate(['store', date.id])
  }



}
