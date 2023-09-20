import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  constructor(private che: CartService) { }

  view = false

  ngOnInit(): void {
    this.che.Check.subscribe(res => {
      this.view = res
      this.change()
    })
  }

  change() {
    setInterval(() => {
      this.view = false
    }, 5000)
  }


}
