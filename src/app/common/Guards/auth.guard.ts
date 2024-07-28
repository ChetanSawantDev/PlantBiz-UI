import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChildFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot 

): boolean | UrlTree => {
  const router = inject(Router);

  console.warn(route);
  if ( !false) {
    router.navigate(['/login']);
    return false;
  }else{
    router.navigate([''])
  }

  return true;
};

export const authGuardForChild: CanActivateChildFn = (route, state) =>{
  
  return false;
}
