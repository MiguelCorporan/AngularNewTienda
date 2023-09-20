import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { OneproductService } from 'src/app/service/oneproduct.service';

@Component({
  selector: 'app-detalleproduct',
  templateUrl: './detalleproduct.component.html',
  styleUrls: ['./detalleproduct.component.css']
})
export class DetalleproductComponent implements OnInit, OnDestroy {

  product: any
  public Datos: any
  public view = true

  private oneData!: Subscription;

  constructor(private route: ActivatedRoute, private one: OneproductService, private card: CartService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => this.product = params['detalle']
    )
    console.log(this.product);


    this.oneData = this.one.OneProduct(this.product).subscribe((res: any) => {
      this.Datos = res
      this.view = false
    }
    )
  }

  ngOnDestroy(): void {
    if (this.oneData) {
      this.oneData.unsubscribe()
    }
  }


  addToCart(item: any, event: Event) {
    event.stopPropagation()
    this.card.AddCard(item)

  }

}
