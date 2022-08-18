import { Injectable } from '@angular/core';
import { delay, Observable, tap, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean = false;
  redirectUrl:string;
  constructor() { }

  login(name:string, password:string): Observable <boolean>{
   const isLoggedIn = (name == "amd" && password == "amd");
   return of (isLoggedIn).pipe(
     delay(1000),
     tap(isLoggedIn=>this.isLoggedIn=isLoggedIn)
   );

  }

  logout(){

this.isLoggedIn=false;
  }
}
