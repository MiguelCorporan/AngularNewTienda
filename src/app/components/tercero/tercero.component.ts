import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LimitapiService } from 'src/app/service/limitapi.service';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent implements OnInit {

  constructor(private ApiFive: LimitapiService, private router: Router) { }

  public Date: any = []

  ngOnInit(): void {
    this.ApiFive.FiveProduct()
      .subscribe(res => {
        this.Date = res
      })
  }


  Redirect(item: any, event: Event) {
    event.stopPropagation()
    this.router.navigate(['store', item.id]);
  }

}
