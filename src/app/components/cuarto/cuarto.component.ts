import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LimitapiService } from 'src/app/service/limitapi.service';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent implements OnInit {

  imgs: any = []

  constructor(private nine: LimitapiService, private card: CartService, private router: Router) { }

  ngOnInit(): void {
    this.nine.TenProduct().subscribe(res => {
      this.imgs = res.slice(0, 9)
    }
    )
  }

  addToCard(item: any, event: Event) {
    event.stopPropagation()
    this.card.AddCard(item)
  }


  Detalles(item: any, event: Event) {
    event.stopPropagation()

    this.router.navigate(['store', item.id])
  }

}
