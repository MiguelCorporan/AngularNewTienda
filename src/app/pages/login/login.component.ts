import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  change = false

  constructor(private readonly fb: FormBuilder, private Login: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.initForm()

    this.Login.noRegis()
      .subscribe(res => {
        if (res) {
          this.change = res
          setInterval(() => {
            this.change = false
          }, 4000)
        }
      })
  }

  onSubmit() {
    this.Login.login(this.loginForm.value)
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

}