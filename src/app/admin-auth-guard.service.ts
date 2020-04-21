import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { AppUser } from './models/app-user';
//import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService:UserService) { }
  canActivate (): Observable <boolean> {
return this.auth.user$.pipe(
  switchMap(user =>{
    return this.userService.get(user.uid);
  }),
  map(
    appUser => {
      return appUser.isAdmin;
    }
  )
)
  }
}
