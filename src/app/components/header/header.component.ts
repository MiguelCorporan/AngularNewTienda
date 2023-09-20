import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public change: boolean = false
  public loged: Boolean = false
  public name = ''
  public numer = 0
  public price = 0

  public items: any = []

  constructor(private login: LoginService, private router: Router, private cart: CartService) { }

  ngOnInit(): void {

    this.cart.getItems().subscribe((res: any) => {
      console.log(res);
      this.items = res
      let total = res.reduce((suma: any, elemento: any) => suma + elemento.count, 0);
      let totalPrice = res.reduce((acc: any, elemento: any) => acc + (elemento.price * elemento.count), 0);
      this.numer = total
      this.price = totalPrice

    });

    this.login.IsLogged.subscribe(res => {

      if (res) {
        const Date: any = localStorage.getItem('User')
        const Datos: any = JSON.parse(Date)
        this.name = Datos.name.charAt(0)
        console.log(res, 'cambio');

        this.loged = res
        this.router.navigate(['user'])
      } else if (!res) {
        this.loged = false
      }
    })
  }

  cambio() {
    this.change = !this.change
    console.log('Funcionado');
  }

  remove(item: any, event: Event) {
    event.stopPropagation()
    this.cart.removeItem(item)
  }

  allRemove() {
    this.cart.removeAll()
  }
}
