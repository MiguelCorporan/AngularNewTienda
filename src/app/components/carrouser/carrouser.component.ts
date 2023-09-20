import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApistoreService } from 'src/app/service/apistore.service';

interface CarrouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carrouser',
  templateUrl: './carrouser.component.html',
  styleUrls: ['./carrouser.component.css']
})
export class CarrouserComponent implements OnInit, OnDestroy {

  @Input() image: CarrouselImages[] = []

  @Input() Indicador = true
  @Input() Controls = true
  @Input() autoSlider = false
  @Input() interval = 3000

  // images = [
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  //     imageAlt: 'nature2',
  //   },
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  //     imageAlt: 'person1',
  //   },
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  //     imageAlt: 'person2',
  //   },
  // ]

  images: any

  selectIndex: number = 0

  change = true

  constructor(private api: ApistoreService) { }

  private imas!: Subscription

  ngOnInit(): void {

    if (this.autoSlider) {
      this.autoSliderImg()
    }

    this.imas = this.api.apiAllProduct().subscribe(
      res => {
        this.images = res.slice(0, 4)
        this.change = false
      }
    )

  }

  ngOnDestroy(): void {
    if (this.imas) {
      this.imas.unsubscribe()
    }
  }



  autoSliderImg(): void {
    setInterval(() => {
      this.Netx()
    }, this.interval)
  }

  selectImge(index: number): void {
    this.selectIndex = index
  }

  Netx() {
    if (this.selectIndex === this.images.length - 1) {
      this.selectIndex = 0
    } else {
      this.selectIndex++;
    }
  }
}
