import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  UrlTree,
  ActivatedRoute} from '@angular/router';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService, private router: Router,private route: ActivatedRoute) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user$.pipe(
    map(user => {
    if(user) 
    return true;
    
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}    });
    return false;
    
    })
    );
    }
}
