import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private log: LoginService) { }

  public name = ''

  ngOnInit(): void {

    const Date: any = localStorage.getItem('User')
    const Dato: any = JSON.parse(Date)
    this.name = Dato.name
  }


  salir() {
    this.log.LogOut()
  }

}
