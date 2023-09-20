import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../service/login.service';

export const nologinGuard: CanActivateFn = (route, state) => {

  let datos = false

  const loginService = inject(LoginService);
  const date = loginService.IsLogged.subscribe((res: boolean) => {
    console.log(res);
    datos = !res
  })
  console.log(date);

  return datos

};
