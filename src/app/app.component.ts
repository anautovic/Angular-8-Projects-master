import { Component, OnDestroy } from '@angular/core';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  subscription:Subscription;
  constructor(private userService: UserService, private auth:AuthService, router: Router){
   this.subscription= this.auth.user$.subscribe(user=> {
      if (user){
         userService.save(user);
        let returnUrl= localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl)
      }
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
 