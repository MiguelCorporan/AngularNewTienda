import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { LimitapiService } from 'src/app/service/limitapi.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit, OnDestroy {



  constructor(private tenApi: LimitapiService, private cart: CartService, private router: Router) { }

  private apiTen!: Subscription;

  public Datos: any = []
  public change = true

  ngOnInit(): void {

    this.apiTen = this.tenApi.TenProduct()
      .subscribe(res => {
        console.log(res);
        this.Datos = res.slice(0, 5)
        this.change = false
      })

    this.cart.getItems()
      .subscribe(res => {
        console.log(res);

      })
  }

  ngOnDestroy(): void {
    if (this.apiTen) {
      this.apiTen.unsubscribe()
    }
  }


  addToCart(item: any) {
    this.cart.AddCard(item)
  }

  Detalle(Data: any, event: Event) {
    event.stopPropagation()
    console.log('aaaaa', Data.id);

    this.router.navigate(['store', Data.id]);
  }
}
