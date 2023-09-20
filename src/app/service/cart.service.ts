import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public CartItem: any = []
  CartItemList = new BehaviorSubject<any>([])
  Check = new BehaviorSubject<any>(false)

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.CartItem = JSON.parse(storedCart);
      this.CartItemList.next(this.CartItem);
    }
  }


  getItems() {
    return this.CartItemList.asObservable()
  }

  chec() {
    return this.Check.asObservable()
  }


  AddCard(item: any) {


    const Encuentra = this.CartItem.find((items: any) => items.id === item.id)


    if (Encuentra) {
      this.CartItem = this.CartItem.map((items: any) => items.id == item.id ? { ...items, count: items.count + 1 } : items)
      this.CartItemList.next(this.CartItem)
    } else {

      this.CartItem = [...this.CartItem, { ...item, count: 1 }]
      this.CartItemList.next(this.CartItem)
    }


    localStorage.setItem('cart', JSON.stringify(this.CartItem));

    this.Check.next(true)

  }

  removeItem(item: any) {
    this.CartItem.map((a: any, index: any) => {
      if (item.id === a.id) {
        this.CartItem.splice(index, 1)
      }
    })
  }

  removeAll() {
    this.CartItem = []
    this.CartItemList.next(this.CartItem)
  }
}
