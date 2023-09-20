import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveregistroService } from 'src/app/service/saveregistro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  contactForm!: FormGroup;
  NiceRegistro = false

  constructor(private readonly fb: FormBuilder, private registro: SaveregistroService, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.initForm()

    this.registro.RegistroNice()
      .subscribe(res => {
        this.NiceRegistro = res

        if (res) {
          this.cambialo()
        }
      })
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.registro.saveRegistroData(this.contactForm.value)
    this.contactForm.reset()

  }

  cambialo() {
    setInterval(() => {
      this.NiceRegistro = false
      this.router.navigate(['/login'])
    }, 5000)
  }


  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

}
