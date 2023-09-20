import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../service/login.service';

export const estaloginGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  return loginService.IsLogged

};
