import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router)
  const _PLATFORM_ID=inject(PLATFORM_ID)

  if(isPlatformBrowser(_PLATFORM_ID)){
  if(localStorage.getItem('token')!==null){
    _Router.navigate(['/home']);
    return false;

  }
  else{

    return true;
  }
}
else{
  return true
}
};